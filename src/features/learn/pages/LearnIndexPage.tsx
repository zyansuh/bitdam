import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { LEARN_TAGS } from '../data/learnTags'
import LearnCategoryBlock from '../components/LearnCategoryBlock'
import LearnDailyCard from '../components/LearnDailyCard'
import LearnHero from '../components/LearnHero'
import { useLearnDaily } from '../hooks/useLearnDaily'

const TAG_ANCHOR: Record<string, string> = {
  'three-min': 'ferment',
  'distill-story': 'distill-deep',
  'our-sool': 'grain',
  'oak-story': 'oak',
  'world-sool': 'world',
}

export default function LearnIndexPage() {
  const daily = useLearnDaily()

  usePageMeta({
    title: '술 상식 | 빚담',
    description: '100장의 카드형 술 상식. 원료·발효·증류·숙성·세계 술까지 하루에 한 장씩 읽습니다.',
  })

  return (
    <PageLayout>
      <Navbar />
      <main className="learn-page">
        <LearnHero />
        <LearnDailyCard article={daily} />
        <nav className="learn-toc" aria-label="술 상식 태그">
          {LEARN_TAGS.map((tag) => (
            <a key={tag.id} href={`#${TAG_ANCHOR[tag.id]}`}>
              {tag.label}
            </a>
          ))}
        </nav>
        <nav className="learn-toc" aria-label="술 상식 분류">
          {LEARN_CATEGORIES.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </nav>
        {LEARN_CATEGORIES.map((category) => (
          <LearnCategoryBlock key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </PageLayout>
  )
}
