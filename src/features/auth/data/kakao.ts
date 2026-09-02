export const KAKAO_AUTHORIZE_URL = 'https://kauth.kakao.com/oauth/authorize'
export const KAKAO_TOKEN_PATH = '/kakao-oauth/oauth/token'
export const KAKAO_ME_PATH = '/kakao-api/v2/user/me'
export const KAKAO_CALLBACK_PATH = '/login/kakao/callback'
export const KAKAO_REDIRECT_URI_KEY = 'kakao.redirect_uri'
export const KAKAO_OAUTH_STATE_KEY = 'kakao.oauth.state'
export const KAKAO_LOGIN_SCOPE = 'profile_nickname,profile_image'

export function getKakaoRedirectUri(): string {
  const fromEnv = (import.meta.env.VITE_KAKAO_REDIRECT_URI ?? '').trim()
  if (fromEnv) {
    return fromEnv
  }

  return `${window.location.origin}${KAKAO_CALLBACK_PATH}`
}

function readViteEnv(value: string | undefined): string {
  return (value ?? '').trim()
}

export function getKakaoRestApiKey(): string {
  return (
    readViteEnv(import.meta.env.VITE_KAKAO_REST_API_KEY) ||
    readViteEnv(import.meta.env.VITE_KAKAO_API_KEY) ||
    readViteEnv(import.meta.env.VITE_KAKO_API_KEY)
  )
}

export function getKakaoJavascriptKey(): string {
  return (import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY ?? '').trim()
}

export function getKakaoClientSecret(): string {
  return (import.meta.env.VITE_KAKAO_CLIENT_SECRET ?? '').trim()
}
