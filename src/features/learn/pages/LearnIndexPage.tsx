import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import LearnArticleList from '../components/LearnArticleList'
import LearnDailyCard from '../components/LearnDailyCard'
import LearnHero from '../components/LearnHero'
import LearnHubFilters from '../components/LearnHubFilters'
import LearnPager from '../components/LearnPager'
import { useLearnDaily } from '../hooks/useLearnDaily'
import { useLearnDailyNotice } from '../hooks/useLearnDailyNotice'
import { useLearnHubQuery } from '../hooks/useLearnHubQuery'

export default function LearnIndexPage() {
  const daily = useLearnDaily()
  const hub = useLearnHubQuery()
  useLearnDailyNotice()

  usePageMeta({
    title: '술 상식 | 빚담',
    description: '하루 한 장씩 쌓이는 술 상식 목록. 페이지를 넘겨 원료·발효·증류·숙성·세계 술을 이어서 읽습니다.',
    image: daily.cover,
  })

  return (
    <PageLayout>
      <Navbar />
      <main className="learn-page">
        <LearnHero />
        <LearnDailyCard article={daily} />
        <LearnHubFilters query={hub.query} count={hub.results.length} onChange={hub.patch} />
        <LearnArticleList articles={hub.paging.slice} todaySlug={daily.slug} />
        <LearnPager page={hub.paging.page} pages={hub.paging.pages} onPage={(page) => hub.patch({ page })} />
      </main>
      <Footer />
    </PageLayout>
  )
}
