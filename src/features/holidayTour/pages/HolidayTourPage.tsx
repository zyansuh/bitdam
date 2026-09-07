import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import HolidayTourHero from '../components/HolidayTourHero'
import HolidayTourList from '../components/HolidayTourList'

export default function HolidayTourPage() {
  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <HolidayTourHero />
      <HolidayTourList />
      <Footer />
    </PageLayout>
  )
}
