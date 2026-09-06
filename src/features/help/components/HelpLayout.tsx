import type { ReactNode } from 'react'
import { navLinks } from '../../../data/navLinks'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import HelpSearchBar from './HelpSearchBar'
import HelpSidebar from './HelpSidebar'

interface HelpLayoutProps {
  query: string
  onQuery: (value: string) => void
  children: ReactNode
}

export default function HelpLayout({ query, onQuery, children }: HelpLayoutProps) {
  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <main className="help-page">
        <div className="help-page__head">
          <h1 className="help-page__title">고객센터</h1>
          <HelpSearchBar value={query} onChange={onQuery} />
        </div>
        <div className="help-page__layout">
          <HelpSidebar />
          <div className="help-page__main">{children}</div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
