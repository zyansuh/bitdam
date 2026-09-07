import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { usePageMeta } from '../../../shared/hooks/usePageMeta'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { listLearnByCategory } from '../data/learnArticles'
import { isLearnCatalogLocked } from '../data/learnDaily'
import LearnArticleBody from '../components/LearnArticleBody'
import LearnCover from '../components/LearnCover'
import LearnRelatedLinks from '../components/LearnRelatedLinks'
import LearnSiblingCards from '../components/LearnSiblingCards'
import LearnSaveButton from '../components/LearnSaveButton'
import LearnTagBadge from '../components/LearnTagBadge'
import LearnToneNote from '../components/LearnToneNote'
import { useLearnArticle } from '../hooks/useLearnArticle'
import { useLearnLibrary } from '../hooks/useLearnLibrary'

export default function LearnArticlePage() {
  const { article, locked } = useLearnArticle()
  const library = useLearnLibrary(article?.slug)
  const category = LEARN_CATEGORIES.find((item) => item.id === article?.category)
  const siblings = article
        ? listLearnByCategory(article.category).filter(
            (item) => item.slug !== article.slug && !isLearnCatalogLocked(item.slug),
          )
    : []

  usePageMeta({
    title: article ? `${article.title} | 빚담 술 상식` : locked ? '아직 공개 전입니다 | 빚담' : '글을 찾을 수 없습니다 | 빚담',
    description: article?.lead ?? (locked ? '예약된 술 상식은 공개일 이후 열립니다.' : '요청한 술 상식 글이 없습니다.'),
    image: article?.cover,
  })

  useEffect(() => {
    if (article) library.markRead()
  }, [article?.slug])

  if (!article) {
    return (
      <PageLayout>
        <Navbar />
        <main className="learn-page">
          <EmptyState
            title={locked ? '아직 공개 전인 글입니다' : '글을 찾을 수 없습니다'}
            body={
              locked
                ? '하루 한 장씩 목록에 더해집니다. 공개일 전에는 콘텐츠 관리 권한이 있는 직원만 볼 수 있습니다.'
                : '주소가 바뀌었거나 아직 없는 술 상식입니다.'
            }
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
          <LearnCover src={article.cover} alt={`${article.title} 일러스트`} />
          <p className="learn-article__kicker">
            <Link to="/learn">{category?.kicker ?? '술 상식'}</Link>
          </p>
          <LearnTagBadge tag={article.tag} />
          <h1>{article.title}</h1>
          <p className="learn-article__lead">{article.lead}</p>
          <p className="learn-article__meta">
            읽는 시간 약 {article.minutes}분 · {library.read ? '읽음' : '새 글'}
          </p>
          <LearnSaveButton saved={library.saved} onToggle={library.toggleSave} />
          <LearnToneNote tone={article.tone} />
          <LearnArticleBody article={article} />
        </article>
        <LearnRelatedLinks article={article} />
        <LearnSiblingCards articles={siblings} />
      </main>
      <Footer />
    </PageLayout>
  )
}
