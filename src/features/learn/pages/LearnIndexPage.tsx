import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import LearnCategoryBlock from '../components/LearnCategoryBlock'
import LearnHero from '../components/LearnHero'

export default function LearnIndexPage() {
  usePageMeta({
    title: '술 상식 | 빚담',
    description: '막걸리 만드는 법부터 증류·숙성·이름까지, 소규모 도가에서 배우는 술 이야기',
  })

  return (
    <PageLayout>
      <Navbar />
      <main className="learn-page">
        <LearnHero />
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
