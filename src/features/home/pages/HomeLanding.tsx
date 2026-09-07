import InfiniteProductFeed from '../../../shared/components/feed/InfiniteProductFeed'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import Hero from '../components/Hero'
import HomeStoryTeaser from '../components/HomeStoryTeaser'
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
        <HomeStoryTeaser />
      </main>
      <Footer />
    </PageLayout>
  )
}
