import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../../../data/navLinks'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canWriteNotice, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'

interface NoticeLayoutProps {
  query?: string
  onQuery?: (value: string) => void
  children: ReactNode
}

export default function NoticeLayout({ query, onQuery, children }: NoticeLayoutProps) {
  const { user } = useAuth()
  const canWrite = canWriteNotice(resolveWorkspaceRole(user))
  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <main className="notice-page">
        <div className="notice-page__head">
          <div>
            <h1 className="notice-page__title">공지사항</h1>
            <p className="notice-page__lead">빚담의 새 소식과 혜택 정보를 확인하세요.</p>
          </div>
          <div className="notice-page__tools">
            {onQuery ? (
              <input
                className="notice-search"
                value={query}
                onChange={(event) => onQuery(event.target.value)}
                placeholder="공지 검색"
              />
            ) : null}
            <Link to="/notices/digest" className="notice-tool">
              모아보기
            </Link>
            {canWrite ? (
              <Link to="/notices/new" className="notice-tool notice-tool--gold">
                글쓰기
              </Link>
            ) : null}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </PageLayout>
  )
}
