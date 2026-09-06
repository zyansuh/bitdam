import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import { useShareUrl } from '../../../shared/hooks/useShareUrl'
import LimitedBuyCard from '../components/LimitedBuyCard'
import LimitedHero from '../components/LimitedHero'
import LimitedStory from '../components/LimitedStory'
import { useLimitedReserve } from '../hooks/useLimitedReserve'

export default function LimitedEditionPage() {
  const reserve = useLimitedReserve()
  const share = useShareUrl()

  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <LimitedHero />
      <main className="limited-page">
        <LimitedStory />
        <LimitedBuyCard
          reserved={reserve.reserved}
          shareDone={share.done}
          onReserve={reserve.reserve}
          onShare={share.share}
        />
      </main>
      <Footer />
    </PageLayout>
  )
}
