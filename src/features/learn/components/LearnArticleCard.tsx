import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import { LEARN_CATEGORIES } from '../data/learnCategories'

interface LearnArticleCardProps {
  article: LearnArticle
}

export default function LearnArticleCard({ article }: LearnArticleCardProps) {
  const category = LEARN_CATEGORIES.find((item) => item.id === article.category)

  return (
    <article className="learn-card">
      <Link to={`/learn/${article.slug}`} className="learn-card__link">
        <p className="learn-card__kicker">{category?.kicker}</p>
        <h3 className="learn-card__title">{article.title}</h3>
        <p className="learn-card__lead">{article.lead}</p>
        <p className="learn-card__meta">약 {article.minutes}분</p>
      </Link>
    </article>
  )
}
