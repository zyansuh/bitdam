export const NAVER_AUTHORIZE_URL = 'https://nid.naver.com/oauth2.0/authorize'
export const NAVER_TOKEN_PATH = '/naver-oauth/oauth2.0/token'
export const NAVER_ME_PATH = '/naver-api/v1/nid/me'
export const NAVER_CALLBACK_PATH = '/login/naver/callback'
export const NAVER_REDIRECT_URI_KEY = 'naver.redirect_uri'
export const NAVER_OAUTH_STATE_KEY = 'naver.oauth.state'

export function getNaverRedirectUri(): string {
  return `${window.location.origin}${NAVER_CALLBACK_PATH}`
}

function readViteEnv(value: string | undefined): string {
  return (value ?? '').trim()
}

export function getNaverClientId(): string {
  return readViteEnv(import.meta.env.VITE_NAVER_CLIENT_ID)
}

export function getNaverClientSecret(): string {
  return readViteEnv(import.meta.env.VITE_NAVER_CLIENT_SECRET)
}
