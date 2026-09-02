import InfiniteProductFeed from '../../../shared/components/feed/InfiniteProductFeed'
import InfiniteStoryFeed from '../../../shared/components/feed/InfiniteStoryFeed'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import Hero from '../components/Hero'
import PromoBanner from '../components/PromoBanner'
import Stats from '../components/Stats'

export default function HomeLanding() {
  return (
    <PageLayout>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <InfiniteProductFeed />
        <PromoBanner />
        <InfiniteStoryFeed />
      </main>
      <Footer />
    </PageLayout>
  )
}
