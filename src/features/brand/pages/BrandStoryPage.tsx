import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import BrandStoryBanner from '../components/BrandStoryBanner'
import BrandStoryChapterSection from '../components/BrandStoryChapterSection'
import BrandStoryClosing from '../components/BrandStoryClosing'
import BrandStoryFunding from '../components/BrandStoryFunding'
import BrandStoryHero from '../components/BrandStoryHero'
import BrandStoryImpact from '../components/BrandStoryImpact'
import BrandStoryPartners from '../components/BrandStoryPartners'
import BrandStoryPhilosophies from '../components/BrandStoryPhilosophies'
import BrandStoryProcess from '../components/BrandStoryProcess'
import BrandStoryTimeline from '../components/BrandStoryTimeline'
import BrandStoryUglyFruit from '../components/BrandStoryUglyFruit'
import { brandStoryChapters } from '../data/brandStory'

export default function BrandStoryPage() {
  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <main className="brand-story">
        <BrandStoryHero />
        <BrandStoryUglyFruit />
        <BrandStoryPhilosophies />
        <BrandStoryImpact />
        <BrandStoryProcess />
        <BrandStoryFunding />
        <BrandStoryTimeline />
        <BrandStoryPartners />
        <div id="brand-story-body" className="brand-story__body">
          {brandStoryChapters.map((chapter) => (
            <BrandStoryChapterSection key={chapter.id} chapter={chapter} />
          ))}
        </div>
        <BrandStoryClosing />
        <BrandStoryBanner />
      </main>
      <Footer />
    </PageLayout>
  )
}
