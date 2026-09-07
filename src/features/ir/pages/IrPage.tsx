import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import IrAdvisors from '../components/IrAdvisors'
import IrCanvas from '../components/IrCanvas'
import IrContact from '../components/IrContact'
import IrHero from '../components/IrHero'
import IrKpiRow from '../components/IrKpiRow'
import IrLeaders from '../components/IrLeaders'
import IrMarketMix from '../components/IrMarketMix'
import IrRound from '../components/IrRound'
import { useIrHashScroll } from '../hooks/useIrHashScroll'
import { useIrInquiry } from '../hooks/useIrInquiry'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { computeIrSnapshot } from '../utils/computeIrMetrics'

export default function IrPage() {
  usePageMeta({
    title: '투자 IR | 빚담',
    description: '빚담 프리 A 라운드, 리더십, 카탈로그 기반 KPI',
    image: '/images/people/ceo.svg',
  })
  useIrHashScroll()
  const snapshot = computeIrSnapshot()
  const inquiry = useIrInquiry()

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <IrHero />
      <main className="ir-page">
        <IrKpiRow items={snapshot.kpis} />
        <IrRound />
        <IrMarketMix market={snapshot.market} mix={snapshot.mix} />
        <IrCanvas />
        <IrLeaders />
        <IrAdvisors />
        <IrContact
          snapshot={snapshot}
          draft={inquiry.draft}
          onOrg={(value) => inquiry.patch({ org: value })}
          onEmail={(value) => inquiry.patch({ email: value })}
          onSend={inquiry.send}
        />
      </main>
      <Footer />
    </PageLayout>
  )
}
