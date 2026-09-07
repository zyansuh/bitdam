import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import LearnCover from './LearnCover'
import LearnTagBadge from './LearnTagBadge'

interface LearnArticleCardProps {
  article: LearnArticle
}

export default function LearnArticleCard({ article }: LearnArticleCardProps) {
  return (
    <article className="learn-card">
      <Link to={`/learn/${article.slug}`} className="learn-card__link">
        <LearnCover src={article.cover} alt="" />
        <LearnTagBadge tag={article.tag} />
        <h3 className="learn-card__title">{article.title}</h3>
        <p className="learn-card__lead">{article.lead}</p>
        <p className="learn-card__meta">약 {article.minutes}분 · 카드형 상식</p>
      </Link>
    </article>
  )
}
