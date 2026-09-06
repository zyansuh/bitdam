import type { ReactNode } from 'react'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import AccountLoginPrompt from './AccountLoginPrompt'
import SettingsSidebar from './SettingsSidebar'

interface SettingsLayoutProps {
  children: ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const { isLoggedIn } = useAuth()

  return (
    <PageLayout>
      <Navbar />
      <main className="account-page">
        {!isLoggedIn ? (
          <AccountLoginPrompt />
        ) : (
          <div className="account-page__layout">
            <SettingsSidebar />
            <div className="account-page__main">{children}</div>
          </div>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
