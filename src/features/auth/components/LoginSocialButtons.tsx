import { useKakaoLogin } from '../hooks/useKakaoLogin'
import KakaoLoginButton from './KakaoLoginButton'

export default function LoginSocialButtons() {
  const { startKakaoLogin } = useKakaoLogin()

  return (
    <div className="login-social">
      <KakaoLoginButton onClick={startKakaoLogin} />
      <div className="login-social__row">
        <button type="button" className="login-social__naver">
          네이버 로그인
        </button>
        <button type="button" className="login-social__apple">
          Apple 로그인
        </button>
      </div>
    </div>
  )
}
