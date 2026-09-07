import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import LearnCategoryBlock from '../components/LearnCategoryBlock'
import LearnDailyCard from '../components/LearnDailyCard'
import LearnHero from '../components/LearnHero'
import LearnHubFilters from '../components/LearnHubFilters'
import { useLearnDaily } from '../hooks/useLearnDaily'
import { useLearnDailyNotice } from '../hooks/useLearnDailyNotice'
import { useLearnHubQuery } from '../hooks/useLearnHubQuery'

export default function LearnIndexPage() {
  const daily = useLearnDaily()
  const hub = useLearnHubQuery()
  useLearnDailyNotice()

  usePageMeta({
    title: '술 상식 | 빚담',
    description: '100장의 카드형 술 상식. 원료·발효·증류·숙성·세계 술까지 하루에 한 장씩 읽습니다.',
    image: daily.cover,
  })

  return (
    <PageLayout>
      <Navbar />
      <main className="learn-page">
        <LearnHero />
        <LearnDailyCard article={daily} />
        <LearnHubFilters query={hub.query} count={hub.results.length} onChange={hub.patch} />
        {LEARN_CATEGORIES.map((category) => (
          <LearnCategoryBlock
            key={category.id}
            category={category}
            articles={hub.results.filter((item) => item.category === category.id)}
          />
        ))}
      </main>
      <Footer />
    </PageLayout>
  )
}
