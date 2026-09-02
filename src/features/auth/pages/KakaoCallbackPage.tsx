import { Link } from 'react-router-dom'
import { useKakaoCallback } from '../hooks/useKakaoCallback'

export default function KakaoCallbackPage() {
  const { status, message } = useKakaoCallback()

  return (
    <main className="kakao-callback">
      <p className={`kakao-callback__message kakao-callback__message--${status}`}>{message}</p>
      {status === 'error' && (
        <Link to="/login" className="kakao-callback__back">
          로그인 페이지로 돌아가기
        </Link>
      )}
    </main>
  )
}
