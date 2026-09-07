import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import LearnTagBadge from './LearnTagBadge'

interface LearnDailyCardProps {
  article: LearnArticle
}

export default function LearnDailyCard({ article }: LearnDailyCardProps) {
  return (
    <section className="learn-daily">
      <p className="learn-daily__kicker">오늘의 카드</p>
      <LearnTagBadge tag={article.tag} />
      <h2 className="learn-daily__title">
        <Link to={`/learn/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="learn-daily__lead">{article.lead}</p>
      <p className="learn-daily__meta">날짜가 바뀌면 다음 카드가 열립니다 · 약 {article.minutes}분</p>
    </section>
  )
}
