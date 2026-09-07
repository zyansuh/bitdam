import { Link } from 'react-router-dom'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { listLearnByCategory } from '../data/learnArticles'
import LearnArticleBody from '../components/LearnArticleBody'
import { useLearnArticle } from '../hooks/useLearnArticle'

export default function LearnArticlePage() {
  const article = useLearnArticle()
  const category = LEARN_CATEGORIES.find((item) => item.id === article?.category)
  const siblings = article ? listLearnByCategory(article.category).filter((item) => item.slug !== article.slug).slice(0, 4) : []

  usePageMeta({
    title: article ? `${article.title} | 빚담 술 상식` : '글을 찾을 수 없습니다 | 빚담',
    description: article?.lead ?? '요청한 술 상식 글이 없습니다.',
  })

  if (!article) {
    return (
      <PageLayout>
        <Navbar />
        <main className="learn-page">
          <EmptyState
            title="글을 찾을 수 없습니다"
            body="주소가 바뀌었거나 아직 없는 술 상식입니다."
            action={{ href: '/learn', label: '술 상식 목록' }}
          />
        </main>
        <Footer />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <Navbar />
      <main className="learn-page">
        <article className="learn-article">
          <p className="learn-article__kicker">
            <Link to="/learn">{category?.kicker ?? '술 상식'}</Link>
          </p>
          <h1>{article.title}</h1>
          <p className="learn-article__lead">{article.lead}</p>
          <p className="learn-article__meta">읽는 시간 약 {article.minutes}분 · 브랜드 스토리와 별개의 공부 글</p>
          <LearnArticleBody article={article} />
        </article>
        {siblings.length > 0 ? (
          <aside className="learn-more">
            <h2>같은 분류의 다른 글</h2>
            <ul>
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link to={`/learn/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <Link to="/learn" className="shop-gold-btn">
              술 상식 전체 보기
            </Link>
          </aside>
        ) : null}
      </main>
      <Footer />
    </PageLayout>
  )
}
