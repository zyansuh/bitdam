import { Link } from 'react-router-dom'
import { listFeaturedLearn } from '../../learn/data/learnArticles'
import LearnArticleCard from '../../learn/components/LearnArticleCard'
import LearnDailyCard from '../../learn/components/LearnDailyCard'
import { useLearnDaily } from '../../learn/hooks/useLearnDaily'

export default function HomeStoryTeaser() {
  const daily = useLearnDaily()
  const articles = listFeaturedLearn().filter((item) => item.slug !== daily.slug).slice(0, 3)

  return (
    <section className="story-feed">
      <div className="story-feed__inner">
        <h2 className="story-feed__title">빚담 이야기</h2>
        <p className="story-feed__lead">
          하루에 카드 한 장. 브랜드 소개가 아니라 소규모 도가에서 술을 공부하는 짧은 글입니다.
        </p>
        <LearnDailyCard article={daily} />
        <div className="story-feed__grid">
          {articles.map((article) => (
            <LearnArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="story-feed__more">
          <Link to="/learn" className="shop-gold-btn">
            술 상식 전체 보기
          </Link>
          <Link to="/story" className="shop-ghost-btn">
            브랜드 스토리
          </Link>
        </div>
      </div>
    </section>
  )
}
