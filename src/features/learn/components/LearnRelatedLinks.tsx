import { Link } from 'react-router-dom'
import type { LearnArticle } from '../types/learn'
import { relatedForArticle } from '../data/learnRelated'

interface LearnRelatedLinksProps {
  article: LearnArticle
}

export default function LearnRelatedLinks({ article }: LearnRelatedLinksProps) {
  const related = relatedForArticle(article)
  return (
    <aside className="learn-related">
      <h2>함께 보면 좋은 잔과 도가</h2>
      <p>글의 주제와 맞는 카탈로그·탐방입니다. 상식 카드와 쇼핑몰을 이어 줍니다.</p>
      <ul>
        {related.catalog.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
        {related.breweries.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
