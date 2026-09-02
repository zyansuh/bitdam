import kakaoLoginLargeWide from '../../../assets/auth/kakao/ko/kakao_login_large_wide.png'

interface KakaoLoginButtonProps {
  onClick: () => void
}

export default function KakaoLoginButton({ onClick }: KakaoLoginButtonProps) {
  return (
    <button type="button" className="kakao-login-button" onClick={onClick}>
      <img src={kakaoLoginLargeWide} alt="카카오 로그인" className="kakao-login-button__img" />
    </button>
  )
}
