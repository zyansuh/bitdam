import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import DealBanner from '../components/DealBanner'
import DealFeatured from '../components/DealFeatured'
import DealFilters from '../components/DealFilters'
import DealGrid from '../components/DealGrid'
import { useTimeSaleFilter } from '../hooks/useTimeSaleFilter'

export default function TimeSalePage() {
  const filter = useTimeSaleFilter()

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <DealBanner />
      <main className="deal-page">
        <DealFeatured />
        <div className="deal-body">
          <DealFilters
            category={filter.category}
            band={filter.band}
            onCategory={filter.setCategory}
            onBand={filter.setBand}
          />
          <DealGrid items={filter.items} />
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
