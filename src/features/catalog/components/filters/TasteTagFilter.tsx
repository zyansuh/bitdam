import { TASTE_TAGS } from '../../data/filterOptions'

interface TasteTagFilterProps {
  selected: string[]
  onToggle: (tag: string) => void
}

export default function TasteTagFilter({ selected, onToggle }: TasteTagFilterProps) {
  return (
    <fieldset>
      <legend className="filter-legend">맛 프로필</legend>
      <div className="taste-tags">
        {TASTE_TAGS.map((tag) => {
          const isActive = selected.includes(tag)
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggle(tag)}
              className={`taste-tag ${isActive ? 'taste-tag--active' : 'taste-tag--idle'}`}
            >
              {tag}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
