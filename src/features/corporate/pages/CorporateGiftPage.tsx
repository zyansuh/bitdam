import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import CorporateHero from '../components/CorporateHero'
import CorporateQuote from '../components/CorporateQuote'
import CorporateSets from '../components/CorporateSets'
import { useCorporateQuote } from '../hooks/useCorporateQuote'

export default function CorporateGiftPage() {
  const quote = useCorporateQuote()

  return (
    <PageLayout>
      <SiteHeader tone="navy" links={navLinks} />
      <CorporateHero />
      <CorporateSets />
      <CorporateQuote
        draft={quote.draft}
        onCompany={(value) => quote.patch({ company: value })}
        onContact={(value) => quote.patch({ contact: value })}
        onQty={(value) => quote.patch({ qty: value })}
        onNote={(value) => quote.patch({ note: value })}
        onSend={quote.send}
      />
      <Footer />
    </PageLayout>
  )
}
