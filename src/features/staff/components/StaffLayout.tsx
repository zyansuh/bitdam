import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenAdminScope, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import AccountLoginPrompt from '../../account/components/AccountLoginPrompt'
import StaffSidebar from './StaffSidebar'

interface StaffLayoutProps {
  children: ReactNode
}

export default function StaffLayout({ children }: StaffLayoutProps) {
  const { isLoggedIn, user } = useAuth()
  const allowed = canOpenAdminScope(resolveWorkspaceRole(user))

  return (
    <PageLayout>
      <Navbar />
      <main className="staff-page">
        {!isLoggedIn ? (
          <AccountLoginPrompt />
        ) : !allowed ? (
          <section className="lounge-denied">
            <h1>구성원 권한과 성과는 ADMIN만 볼 수 있습니다.</h1>
            <Link to="/mypage" className="lounge-denied__link">
              마이페이지로
            </Link>
          </section>
        ) : (
          <div className="staff-page__layout">
            <StaffSidebar />
            <div className="staff-page__main">{children}</div>
          </div>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
