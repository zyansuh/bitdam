import type { AuthUser } from '../../../shared/types/auth'
import {
  getKakaoClientSecret,
  getKakaoRedirectUri,
  getKakaoRestApiKey,
  KAKAO_AUTHORIZE_URL,
  KAKAO_LOGIN_SCOPE,
  KAKAO_ME_PATH,
  KAKAO_REDIRECT_URI_KEY,
  KAKAO_TOKEN_PATH,
} from '../data/kakao'
import type { KakaoProfileResponse, KakaoTokenResponse } from '../types/kakao'
import { KakaoConfigError } from './kakaoConfigError'

export function buildKakaoAuthorizeUrl(): string {
  const clientId = getKakaoRestApiKey()
  if (!clientId) {
    throw new KakaoConfigError(
      '카카오 로그인을 시작할 수 없습니다',
      '배포 환경에 카카오 REST API 키가 없습니다. Vercel 프로젝트 Settings → Environment Variables에 VITE_KAKAO_REST_API_KEY를 Production과 Preview에 넣은 뒤 다시 배포해 주세요. 카카오 개발자 콘솔 Redirect URI에는 https://<배포주소>/login/kakao/callback 도 등록해야 합니다.',
    )
  }

  const redirectUri = getKakaoRedirectUri()
  sessionStorage.setItem(KAKAO_REDIRECT_URI_KEY, redirectUri)

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: KAKAO_LOGIN_SCOPE,
  })

  return `${KAKAO_AUTHORIZE_URL}?${params.toString()}`
}

export async function exchangeKakaoCode(code: string): Promise<KakaoTokenResponse> {
  const clientId = getKakaoRestApiKey()
  const redirectUri = sessionStorage.getItem(KAKAO_REDIRECT_URI_KEY) ?? getKakaoRedirectUri()

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: clientId,
    redirect_uri: redirectUri,
    code,
  })

  const clientSecret = getKakaoClientSecret()
  if (clientSecret) {
    body.set('client_secret', clientSecret)
  }

  const response = await fetch(KAKAO_TOKEN_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    body,
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(formatKakaoTokenError(response.status, detail))
  }

  return (await response.json()) as KakaoTokenResponse
}

const kakaoLoginByCode = new Map<string, Promise<AuthUser>>()

export function completeKakaoLogin(code: string): Promise<AuthUser> {
  const existing = kakaoLoginByCode.get(code)
  if (existing) {
    return existing
  }

  const pending = exchangeKakaoCode(code).then((token) => fetchKakaoProfile(token.access_token))
  kakaoLoginByCode.set(code, pending)
  return pending
}

function formatKakaoTokenError(status: number, detail: string): string {
  try {
    const parsed = JSON.parse(detail) as { error_code?: string }

    if (parsed.error_code === 'KOE010') {
      return '카카오 Client Secret이 켜져 있거나 값이 맞지 않습니다. 개발자 콘솔 → 보안에서 Client Secret을 끄거나, .env에 VITE_KAKAO_CLIENT_SECRET을 넣은 뒤 서버를 재시작해 주세요.'
    }

    if (parsed.error_code === 'KOE320') {
      return '카카오 인증 코드가 이미 사용됐거나 만료되었습니다. 로그인 페이지에서 다시 시도해 주세요.'
    }
  } catch {
    // Kakao may return a non-JSON body.
  }

  return `카카오 토큰 발급에 실패했습니다. (${status}) ${detail}`
}

function toHttpsUrl(url?: string): string | undefined {
  if (!url) {
    return undefined
  }

  return url.replace(/^http:\/\//i, 'https://')
}

function pickKakaoProfileImage(profile: KakaoProfileResponse): string | undefined {
  return toHttpsUrl(
    profile.kakao_account?.profile?.thumbnail_image_url ||
      profile.kakao_account?.profile?.profile_image_url ||
      profile.properties?.thumbnail_image ||
      profile.properties?.profile_image,
  )
}

export async function fetchKakaoProfile(accessToken: string): Promise<AuthUser> {
  const query = new URLSearchParams({
    property_keys: JSON.stringify([
      'kakao_account.profile',
      'kakao_account.email',
      'properties.nickname',
      'properties.profile_image',
      'properties.thumbnail_image',
    ]),
  })

  const response = await fetch(`${KAKAO_ME_PATH}?${query.toString()}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  if (!response.ok) {
    throw new Error('카카오 프로필을 불러오지 못했습니다.')
  }

  const profile = (await response.json()) as KakaoProfileResponse
  const nickname =
    profile.kakao_account?.profile?.nickname?.trim() ||
    profile.properties?.nickname?.trim() ||
    '회원'

  return {
    id: String(profile.id),
    nickname,
    profileImage: pickKakaoProfileImage(profile),
    email: profile.kakao_account?.email,
    provider: 'kakao',
  }
}
