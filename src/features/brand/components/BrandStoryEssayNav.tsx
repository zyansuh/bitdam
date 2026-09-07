import { brandStoryChapters } from '../data/brandStory'

interface BrandStoryEssayNavProps {
  activeId: string
  onSelect: (id: string) => void
}

export default function BrandStoryEssayNav({ activeId, onSelect }: BrandStoryEssayNavProps) {
  return (
    <nav className="brand-story-essay__nav" aria-label="브랜드 이야기 여섯 장">
      {brandStoryChapters.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`brand-story-essay__chip${item.id === activeId ? ' is-on' : ''}`}
          aria-current={item.id === activeId ? 'true' : undefined}
          onClick={() => onSelect(item.id)}
        >
          <span>{item.number}</span>
          {item.tocLabel}
        </button>
      ))}
    </nav>
  )
}
