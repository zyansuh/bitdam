/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_API_KEY: string
  readonly VITE_KAKAO_API_KEY?: string
  readonly VITE_KAKO_API_KEY?: string
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string
  readonly VITE_KAKAO_REDIRECT_URI: string
  readonly VITE_KAKAO_CLIENT_SECRET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
