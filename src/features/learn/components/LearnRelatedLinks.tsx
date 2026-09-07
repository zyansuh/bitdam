import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import { relatedForArticle } from '../data/learnRelated'

interface LearnRelatedLinksProps {
  article: LearnArticle
}

const KIND_LABEL = {
  catalog: '잔 · 카탈로그',
  brewery: '도가 · 탐방',
} as const

const KIND_ACTION = {
  catalog: '잔 보러 가기',
  brewery: '도가 보러 가기',
} as const

export default function LearnRelatedLinks({ article }: LearnRelatedLinksProps) {
  const related = relatedForArticle(article)
  const items = [...related.catalog, ...related.breweries]

  return (
    <aside className="learn-next" aria-labelledby="learn-related-title">
      <header className="learn-next__head">
        <p className="learn-next__kicker">글 다음으로</p>
        <h2 id="learn-related-title">함께 보면 좋은 잔과 도가</h2>
        <p className="learn-next__lead">카드를 누르면 상점 목록이나 양조장 페이지로 이어집니다.</p>
      </header>
      <ul className="learn-next__grid">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="learn-next__card">
              <span className="learn-next__kind">{KIND_LABEL[item.kind]}</span>
              <strong className="learn-next__name">{item.label}</strong>
              <span className="learn-next__hint">{item.hint}</span>
              <span className="learn-next__go">{KIND_ACTION[item.kind]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
