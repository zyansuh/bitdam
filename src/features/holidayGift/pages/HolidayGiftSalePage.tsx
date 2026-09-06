import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import HolidayGiftFilters from '../components/HolidayGiftFilters'
import HolidayGiftGrid from '../components/HolidayGiftGrid'
import HolidayGiftHero from '../components/HolidayGiftHero'
import { useHolidayGiftFilter } from '../hooks/useHolidayGiftFilter'

export default function HolidayGiftSalePage() {
  const filter = useHolidayGiftFilter()

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <HolidayGiftHero />
      <main className="hgift-page">
        <HolidayGiftFilters
          occasion={filter.occasion}
          prices={filter.prices}
          composes={filter.composes}
          recipients={filter.recipients}
          onOccasion={filter.setOccasion}
          onPrice={filter.togglePrice}
          onCompose={filter.toggleCompose}
          onRecipient={filter.toggleRecipient}
        />
        <HolidayGiftGrid items={filter.items} />
      </main>
      <Footer />
    </PageLayout>
  )
}
