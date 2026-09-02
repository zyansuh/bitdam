import type { BrandStoryChapter } from '../types/brandStory'
import BrandStoryBlocks from './BrandStoryBlocks'

interface BrandStoryChapterSectionProps {
  chapter: BrandStoryChapter
}

export default function BrandStoryChapterSection({ chapter }: BrandStoryChapterSectionProps) {
  const heading = chapter.titleLines.join(' ') || '시작'

  return (
    <section className="brand-story-chapter" aria-labelledby={`chapter-${chapter.id}`}>
      <div className="brand-story-chapter__meta">
        <span className="brand-story-chapter__number">{chapter.number}</span>
        {chapter.titleLines.length > 0 ? (
          <h2 id={`chapter-${chapter.id}`} className="brand-story-chapter__title">
            {chapter.titleLines.map((line) => (
              <span key={line} className="brand-story-chapter__title-line">
                {line}
              </span>
            ))}
          </h2>
        ) : (
          <h2 id={`chapter-${chapter.id}`} className="brand-story-chapter__title--sr">
            {heading}
          </h2>
        )}
      </div>
      <BrandStoryBlocks blocks={chapter.blocks} />
    </section>
  )
}
