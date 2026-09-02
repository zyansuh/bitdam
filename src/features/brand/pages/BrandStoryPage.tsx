import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import BrandStoryChapterSection from '../components/BrandStoryChapterSection'
import BrandStoryClosing from '../components/BrandStoryClosing'
import BrandStoryHero from '../components/BrandStoryHero'
import { brandStoryChapters } from '../data/brandStory'

export default function BrandStoryPage() {
  return (
    <PageLayout>
      <Navbar />
      <main className="brand-story">
        <BrandStoryHero />
        <div className="brand-story__body">
          {brandStoryChapters.map((chapter) => (
            <BrandStoryChapterSection key={chapter.id} chapter={chapter} />
          ))}
        </div>
        <BrandStoryClosing />
      </main>
      <Footer />
    </PageLayout>
  )
}
