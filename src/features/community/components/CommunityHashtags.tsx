import { communityHashtags } from '../data/communityHashtags'

interface CommunityHashtagsProps {
  active: string | null
  onSelect: (tag: string | null) => void
}

export default function CommunityHashtags({ active, onSelect }: CommunityHashtagsProps) {
  return (
    <section>
      <h2 className="community-index__title">인기 해시태그</h2>
      <ul className="community-tags">
        {communityHashtags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              className={active === tag ? 'community-tags__item community-tags__item--on' : 'community-tags__item'}
              onClick={() => onSelect(active === tag ? null : tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
