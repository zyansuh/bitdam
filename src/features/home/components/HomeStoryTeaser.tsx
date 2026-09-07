import { Link } from 'react-router-dom'
import { listFeaturedLearn } from '../../learn/data/learnArticles'
import LearnArticleCard from '../../learn/components/LearnArticleCard'

export default function HomeStoryTeaser() {
  const articles = listFeaturedLearn()

  return (
    <section className="story-feed">
      <div className="story-feed__inner">
        <h2 className="story-feed__title">빚담 이야기</h2>
        <p className="story-feed__lead">
          브랜드 소개가 아니라, 소규모 도가에서 술을 공부하는 짧은 글입니다. 카드를 누르면 만드는 법·증류·이름까지 이어집니다.
        </p>
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
