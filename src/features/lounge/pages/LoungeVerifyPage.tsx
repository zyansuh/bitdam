import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import AccountLoginPrompt from '../../account/components/AccountLoginPrompt'
import LoungeVerifyModal from '../components/LoungeVerifyModal'

export default function LoungeVerifyPage() {
  const { isLoggedIn } = useAuth()

  return (
    <PageLayout>
      <Navbar />
      <main className="lounge-page">
        {isLoggedIn ? <LoungeVerifyModal embedded /> : <AccountLoginPrompt />}
      </main>
      <Footer />
    </PageLayout>
  )
}
