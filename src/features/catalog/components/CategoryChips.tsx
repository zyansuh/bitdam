import { CATALOG_CATEGORIES } from '../data/categories'

interface CategoryChipsProps {
  selected: string | null
  onSelect: (slug: string | null) => void
}

export default function CategoryChips({ selected, onSelect }: CategoryChipsProps) {
  return (
    <div className="category-chips">
      {CATALOG_CATEGORIES.map((category) => {
        const isActive = selected === category.slug
        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => onSelect(isActive ? null : category.slug)}
            className={`category-chip ${isActive ? 'category-chip--active' : 'category-chip--idle'}`}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
