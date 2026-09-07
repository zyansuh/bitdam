import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import { useShareUrl } from '../../../shared/hooks/useShareUrl'
import DailyEventNotes from '../components/DailyEventNotes'
import LuckyBagPanel from '../components/LuckyBagPanel'
import PremiumGiftAds from '../components/PremiumGiftAds'
import { useLuckyBag } from '../hooks/useLuckyBag'

export default function DailyEventPage() {
  const bag = useLuckyBag()
  const share = useShareUrl(bag.awardShareStamp)

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <main className="lucky-page">
        <div className="lucky-split">
          <LuckyBagPanel state={bag.state} openedToday={bag.openedToday} onOpen={bag.openBag} />
          <PremiumGiftAds sharedToday={bag.sharedToday} shareDone={share.done} onShare={share.share} />
        </div>
        <DailyEventNotes />
      </main>
      <Footer />
    </PageLayout>
  )
}
