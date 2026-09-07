import { Link } from 'react-router-dom'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useNaverCallback } from '../hooks/useNaverCallback'

const CALLBACK_TITLE: Record<'loading' | 'error' | 'success', string> = {
  loading: '네이버 로그인 연결 중',
  success: '로그인되었습니다',
  error: '네이버 로그인에 실패했습니다',
}

export default function NaverCallbackPage() {
  const { status, message } = useNaverCallback()

  return (
    <PageLayout>
      <Navbar />
      <main className="kakao-callback">
        <div className="kakao-callback__card">
          <div className="kakao-callback__accent" />
          <div className="kakao-callback__inner">
            <div className="kakao-callback__mark" aria-hidden>
              <span className="kakao-callback__mark-glyph">빚</span>
            </div>
            <h1 className="kakao-callback__title">{CALLBACK_TITLE[status]}</h1>
            <p className={`kakao-callback__message kakao-callback__message--${status}`}>{message}</p>
            {status === 'error' && (
              <Link to="/login" className="kakao-callback__back">
                로그인 페이지로 돌아가기
              </Link>
            )}
          </div>
        </div>
      </main>
    </PageLayout>
  )
}
