import { useKakaoLogin } from '../hooks/useKakaoLogin'
import { useNaverLogin } from '../hooks/useNaverLogin'
import { useAppleLogin } from '../hooks/useAppleLogin'
import AuthNoticeDialog from './AuthNoticeDialog'
import KakaoLoginButton from './KakaoLoginButton'

export default function LoginSocialButtons() {
  const kakao = useKakaoLogin()
  const naver = useNaverLogin()
  const apple = useAppleLogin()
  const notice = kakao.notice ?? naver.notice ?? apple.notice

  const clearNotice = () => {
    kakao.clearNotice()
    naver.clearNotice()
    apple.clearNotice()
  }

  return (
    <div className="login-social">
      <KakaoLoginButton onClick={kakao.startKakaoLogin} />
      <div className="login-social__row">
        <button type="button" className="login-social__naver" onClick={naver.startNaverLogin}>
          네이버 로그인
        </button>
        <button type="button" className="login-social__apple" onClick={apple.startAppleLogin}>
          Apple 로그인
        </button>
      </div>
      <AuthNoticeDialog notice={notice} onClose={clearNotice} />
    </div>
  )
}
