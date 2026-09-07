import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta({
    title: '페이지를 찾을 수 없습니다 | 빚담',
    description: '요청한 주소가 없거나 이동되었습니다.',
  })

  return (
    <PageLayout>
      <Navbar />
      <main className="not-found">
        <EmptyState
          title="페이지를 찾을 수 없습니다"
          body="주소가 바뀌었거나 잘못된 경로입니다."
          action={{ href: '/', label: '홈으로 가기' }}
        />
        <p className="not-found__links">
          <Link to="/products">상품 목록</Link>
          <Link to="/mypage">마이페이지</Link>
        </p>
      </main>
      <Footer />
    </PageLayout>
  )
}
