import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenAdminScope, canReplySupport, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import AccountLoginPrompt from '../../account/components/AccountLoginPrompt'
import StaffSidebar from './StaffSidebar'

interface StaffLayoutProps {
  children: ReactNode
  allowStaff?: boolean
}

export default function StaffLayout({ children, allowStaff = false }: StaffLayoutProps) {
  const { isLoggedIn, user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const allowed = allowStaff ? canReplySupport(role) : canOpenAdminScope(role)

  return (
    <PageLayout>
      <Navbar />
      <main className="staff-page">
        {!isLoggedIn ? (
          <AccountLoginPrompt />
        ) : !allowed ? (
          <section className="lounge-denied">
            <h1>
              {allowStaff
                ? '이 메뉴는 직원·팀장·ADMIN만 사용할 수 있습니다.'
                : '구성원 권한과 성과는 ADMIN만 볼 수 있습니다.'}
            </h1>
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
