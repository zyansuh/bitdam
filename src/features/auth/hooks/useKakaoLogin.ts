import { buildKakaoAuthorizeUrl } from '../utils/kakaoAuth'

export function useKakaoLogin() {
  const startKakaoLogin = () => {
    try {
      window.location.assign(buildKakaoAuthorizeUrl())
    } catch (error) {
      const message = error instanceof Error ? error.message : '카카오 로그인을 시작할 수 없습니다.'
      window.alert(message)
    }
  }

  return { startKakaoLogin }
}
