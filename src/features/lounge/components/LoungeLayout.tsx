import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import AccountLoginPrompt from '../../account/components/AccountLoginPrompt'
import { useLoungeAccess } from '../hooks/useLoungeAccess'
import { LoungeScopeProvider } from '../providers/loungeScopeProvider'
import LoungeScopeBar from './LoungeScopeBar'
import LoungeSidebar from './LoungeSidebar'

interface LoungeLayoutProps {
  children: ReactNode
}

export default function LoungeLayout({ children }: LoungeLayoutProps) {
  const access = useLoungeAccess()

  return (
    <PageLayout>
      <Navbar />
      <main className="lounge-page">
        {!access.isLoggedIn ? (
          <AccountLoginPrompt />
        ) : !access.allowed ? (
          <section className="lounge-denied">
            <h1>셀러 라운지는 입점 셀러와 회사 직원만 사용할 수 있습니다.</h1>
            <p>일반 회원은 마이페이지에서 주문·배송만 확인할 수 있습니다.</p>
            <Link to="/mypage" className="lounge-denied__link">
              마이페이지로
            </Link>
          </section>
        ) : (
          <LoungeScopeProvider>
            <div className="lounge-page__layout">
              <LoungeSidebar />
              <div className="lounge-page__main">
                <LoungeScopeBar />
                {children}
              </div>
            </div>
          </LoungeScopeProvider>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
