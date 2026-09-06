import type { CommunityCategoryId } from '../types/communityPost'
import { COMMUNITY_CATEGORIES } from '../data/communityCategories'

interface CommunityCategoryNavProps {
  active: CommunityCategoryId
  onSelect: (id: CommunityCategoryId) => void
}

export default function CommunityCategoryNav({ active, onSelect }: CommunityCategoryNavProps) {
  return (
    <nav aria-label="글 분류">
      <h2 className="community-index__title">분류</h2>
      <ul className="community-cats">
        {COMMUNITY_CATEGORIES.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={active === item.id ? 'community-cats__item community-cats__item--on' : 'community-cats__item'}
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
