import { REVIEW_NOTE_TAGS } from '../data/reviewOptions'

interface ReviewTagPickerProps {
  selected: string[]
  extraTags: string[]
  onToggle: (tag: string) => void
}

export default function ReviewTagPicker({ selected, extraTags, onToggle }: ReviewTagPickerProps) {
  const tags = [...new Set([...REVIEW_NOTE_TAGS, ...extraTags])]

  return (
    <section>
      <h2 className="review-section__title">테이스팅 노트 태그 선택</h2>
      <div className="review-tags">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={selected.includes(tag) ? 'review-tags__chip review-tags__chip--on' : 'review-tags__chip'}
            onClick={() => onToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  )
}
