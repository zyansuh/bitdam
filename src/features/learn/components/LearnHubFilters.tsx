import { LEARN_CATEGORIES } from '../data/learnCategories'
import { LEARN_TAGS } from '../data/learnTags'
import type { LearnHubQuery } from '../utils/filterLearnHub'

interface LearnHubFiltersProps {
  query: LearnHubQuery
  count: number
  onChange: (next: Partial<LearnHubQuery>) => void
}

export default function LearnHubFilters({ query, count, onChange }: LearnHubFiltersProps) {
  return (
    <form className="learn-filters" role="search" onSubmit={(event) => event.preventDefault()}>
      <label className="learn-filters__field">
        <span>제목 검색</span>
        <input
          type="search"
          value={query.q}
          onChange={(event) => onChange({ q: event.target.value })}
          placeholder="막걸리, 누룩, 코냑…"
        />
      </label>
      <label className="learn-filters__field">
        <span>태그</span>
        <select value={query.tag} onChange={(event) => onChange({ tag: event.target.value as LearnHubQuery['tag'] })}>
          <option value="">전체 태그</option>
          {LEARN_TAGS.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.label}
            </option>
          ))}
        </select>
      </label>
      <label className="learn-filters__field">
        <span>분류</span>
        <select
          value={query.category}
          onChange={(event) => onChange({ category: event.target.value as LearnHubQuery['category'] })}
        >
          <option value="">전체 분류</option>
          {LEARN_CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>
      <p className="learn-filters__count">지금까지 열린 상식 {count}장 · 하루 한 장씩 목록에 더해집니다</p>
    </form>
  )
}
