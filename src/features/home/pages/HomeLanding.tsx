import InfiniteProductFeed from '../../../shared/components/feed/InfiniteProductFeed'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import Hero from '../components/Hero'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import HomeStoryTeaser from '../components/HomeStoryTeaser'
import PromoBanner from '../components/PromoBanner'
import Stats from '../components/Stats'

export default function HomeLanding() {
  usePageMeta({
    title: '빚담 | Bitdam',
    description: '전국 양조장의 장인 정신을 담은 프리미엄 전통주 플랫폼',
    image: '/images/brewery-hero.svg',
  })
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
