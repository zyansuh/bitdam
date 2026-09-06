/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_REST_API_KEY: string
  readonly VITE_KAKAO_API_KEY?: string
  readonly VITE_KAKO_API_KEY?: string
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string
  readonly VITE_KAKAO_CLIENT_SECRET?: string
  readonly VITE_OPENAI_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
