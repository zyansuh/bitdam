import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import PromoBanner from '../components/PromoBanner'
import Stats from '../components/Stats'
import InfiniteProductFeed from '../shared/components/feed/InfiniteProductFeed'
import InfiniteStoryFeed from '../shared/components/feed/InfiniteStoryFeed'
import PageLayout from '../shared/components/layout/PageLayout'

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
