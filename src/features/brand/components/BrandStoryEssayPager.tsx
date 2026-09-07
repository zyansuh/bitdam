import type { BrandStoryChapter } from '../types/brandStory'

interface BrandStoryEssayPagerProps {
  previous?: BrandStoryChapter
  next?: BrandStoryChapter
  onSelect: (id: string) => void
}

export default function BrandStoryEssayPager({ previous, next, onSelect }: BrandStoryEssayPagerProps) {
  return (
    <div className="brand-story-essay__pager">
      {previous ? (
        <button type="button" onClick={() => onSelect(previous.id)}>
          <span>이전</span>
          {previous.number} {previous.tocLabel}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button type="button" onClick={() => onSelect(next.id)}>
          <span>다음</span>
          {next.number} {next.tocLabel}
        </button>
      ) : (
        <span />
      )}
    </div>
  )
}
