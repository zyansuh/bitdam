import type { AuthUser } from '../../../shared/types/auth'
import { readStoredTheme, resolveTheme } from '../../../shared/utils/themeStorage'
import {
  getNaverClientId,
  getNaverClientSecret,
  getNaverRedirectUri,
  NAVER_AUTHORIZE_URL,
  NAVER_ME_PATH,
  NAVER_OAUTH_STATE_KEY,
  NAVER_REDIRECT_URI_KEY,
  NAVER_TOKEN_PATH,
} from '../data/naver'
import type { NaverProfileResponse, NaverTokenResponse } from '../types/naver'
import { NaverConfigError } from './naverConfigError'

export function buildNaverAuthorizeUrl(): string {
  const clientId = getNaverClientId()
  if (!clientId) {
    throw new NaverConfigError(
      '네이버 로그인을 시작할 수 없습니다',
      '배포 환경에 네이버 클라이언트 ID가 없습니다. Vercel Environment Variables에 VITE_NAVER_CLIENT_ID와 VITE_NAVER_CLIENT_SECRET을 넣은 뒤 다시 배포해 주세요. 네이버 개발자 센터 Callback URL에는 https://<배포주소>/login/naver/callback 도 등록해야 합니다.',
    )
  }

  if (!getNaverClientSecret()) {
    throw new NaverConfigError(
      '네이버 로그인을 시작할 수 없습니다',
      '네이버는 토큰 교환에 Client Secret이 필요합니다. .env와 Vercel에 VITE_NAVER_CLIENT_SECRET을 넣고 개발 서버를 재시작해 주세요.',
    )
  }

  const redirectUri = getNaverRedirectUri()
  sessionStorage.setItem(NAVER_REDIRECT_URI_KEY, redirectUri)

  const theme = resolveTheme(readStoredTheme())
  const nonce = crypto.randomUUID()
  sessionStorage.setItem(NAVER_OAUTH_STATE_KEY, nonce)

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    state: `${nonce}.${theme}`,
  })

  return `${NAVER_AUTHORIZE_URL}?${params.toString()}`
}

export async function exchangeNaverCode(code: string, state: string | null): Promise<NaverTokenResponse> {
  const clientId = getNaverClientId()
  const clientSecret = getNaverClientSecret()
  const redirectUri = sessionStorage.getItem(NAVER_REDIRECT_URI_KEY) ?? getNaverRedirectUri()
  const storedState = sessionStorage.getItem(NAVER_OAUTH_STATE_KEY)

  if (!storedState || !state?.startsWith(`${storedState}.`)) {
    throw new Error('네이버 로그인 상태 값이 맞지 않습니다. 로그인 페이지에서 다시 시도해 주세요.')
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    code,
    state,
  })

  const response = await fetch(NAVER_TOKEN_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    body,
  })

  const token = (await response.json()) as NaverTokenResponse
  if (!response.ok || token.error || !token.access_token) {
    throw new Error(token.error_description || token.error || '네이버 토큰 발급에 실패했습니다.')
  }

  return token
}

const naverLoginByCode = new Map<string, Promise<AuthUser>>()

export function completeNaverLogin(code: string, state: string | null): Promise<AuthUser> {
  const existing = naverLoginByCode.get(code)
  if (existing) {
    return existing
  }

  const pending = exchangeNaverCode(code, state).then((token) => fetchNaverProfile(token.access_token))
  naverLoginByCode.set(code, pending)
  return pending
}

function toHttpsUrl(url?: string): string | undefined {
  if (!url) {
    return undefined
  }

  return url.replace(/^http:\/\//i, 'https://')
}

export async function fetchNaverProfile(accessToken: string): Promise<AuthUser> {
  const response = await fetch(NAVER_ME_PATH, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  if (!response.ok) {
    throw new Error('네이버 프로필을 불러오지 못했습니다.')
  }

  const profile = (await response.json()) as NaverProfileResponse
  if (profile.resultcode !== '00' || !profile.response?.id) {
    throw new Error(profile.message || '네이버 프로필을 불러오지 못했습니다.')
  }

  const nickname = profile.response.nickname?.trim() || profile.response.name?.trim() || '회원'

  return {
    id: profile.response.id,
    nickname,
    profileImage: toHttpsUrl(profile.response.profile_image),
    email: profile.response.email,
    provider: 'naver',
  }
}
