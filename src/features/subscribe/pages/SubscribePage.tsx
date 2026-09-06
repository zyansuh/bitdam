import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import SubscribeArchive from '../components/SubscribeArchive'
import SubscribeFaq from '../components/SubscribeFaq'
import SubscribeGuide from '../components/SubscribeGuide'
import SubscribeHero from '../components/SubscribeHero'
import SubscribePlans from '../components/SubscribePlans'

export default function SubscribePage() {
  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <SubscribeHero />
      <SubscribePlans />
      <SubscribeGuide />
      <SubscribeArchive />
      <SubscribeFaq />
      <section className="sub-cta">
        <h2>품격 있는 맛의 첫걸음, 빚담박스 시작하기</h2>
        <a className="shop-gold-btn" href="#plans">
          빚담박스 정기 구독 신청
        </a>
      </section>
      <Footer />
    </PageLayout>
  )
}
