import { Link } from 'react-router-dom'
import { formatLearnAddedOn, getLearnAddedOn } from '../data/learnDaily'
import type { LearnArticle } from '../types/learn'
import LearnCover from './LearnCover'
import LearnTagBadge from './LearnTagBadge'

interface LearnArticleListProps {
  articles: LearnArticle[]
  todaySlug?: string
}

export default function LearnArticleList({ articles, todaySlug }: LearnArticleListProps) {
  if (articles.length === 0) {
    return <p className="learn-list__empty">이 조건으로 열린 상식이 없습니다. 검색어를 비우거나 다른 태그를 골라 보세요.</p>
  }

  return (
    <ol className="learn-list">
      {articles.map((article) => {
        const addedOn = getLearnAddedOn(article)
        return (
          <li key={article.slug} className="learn-list__item">
            <Link to={`/learn/${article.slug}`} className="learn-list__link">
              <LearnCover src={article.cover} alt="" />
              <div className="learn-list__body">
                <p className="learn-list__when">
                  {formatLearnAddedOn(addedOn)}
                  {article.slug === todaySlug ? <span className="learn-list__today">오늘</span> : null}
                </p>
                <LearnTagBadge tag={article.tag} />
                <h3 className="learn-list__title">{article.title}</h3>
                <p className="learn-list__lead">{article.lead}</p>
                <p className="learn-list__meta">약 {article.minutes}분 · 목록에서 이어서 읽기</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
