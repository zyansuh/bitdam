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
import { computeIrSnapshot } from '../utils/computeIrMetrics'

export default function IrPage() {
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
