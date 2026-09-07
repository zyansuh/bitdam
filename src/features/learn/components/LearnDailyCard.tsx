import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import LearnTagBadge from './LearnTagBadge'

interface LearnDailyCardProps {
  article: LearnArticle
}

export default function LearnDailyCard({ article }: LearnDailyCardProps) {
  return (
    <section className="learn-daily">
      <p className="learn-daily__kicker">오늘 목록에 추가된 상식</p>
      <LearnTagBadge tag={article.tag} />
      <h2 className="learn-daily__title">
        <Link to={`/learn/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="learn-daily__lead">{article.lead}</p>
      <p className="learn-daily__meta">내일이면 이 자리에 다음 한 장이 쌓입니다 · 약 {article.minutes}분</p>
    </section>
  )
}
