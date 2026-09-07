import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import LearnArticleCard from './LearnArticleCard'

interface LearnSiblingCardsProps {
  articles: LearnArticle[]
}

export default function LearnSiblingCards({ articles }: LearnSiblingCardsProps) {
  if (articles.length === 0) return null

  return (
    <aside className="learn-more" aria-labelledby="learn-more-title">
      <header className="learn-more__head">
        <p className="learn-more__kicker">같은 분류</p>
        <h2 id="learn-more-title">이어서 읽기</h2>
        <p className="learn-more__lead">방금 본 주제와 맞닿은 다른 상식 카드입니다. 표지를 눌러 바로 이어 읽습니다.</p>
      </header>
      <div className="learn-more__grid">
        {articles.slice(0, 4).map((article) => (
          <LearnArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <Link to="/learn" className="shop-gold-btn learn-more__all">
        술 상식 목록으로
      </Link>
    </aside>
  )
}
