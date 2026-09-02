import { usePaginatedStories } from '../../hooks/usePaginatedStories'
import FeedStatus from './FeedStatus'
import StoryCard from './StoryCard'

interface InfiniteStoryFeedProps {
  className?: string
}

export default function InfiniteStoryFeed({ className = '' }: InfiniteStoryFeedProps) {
  const { stories, loading, hasMore, sentinelRef } = usePaginatedStories()

  return (
    <section className={`story-feed ${className}`.trim()}>
      <div className="story-feed__inner">
        <h2 className="story-feed__title">빚담 이야기</h2>
        <div className="story-feed__grid">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        <div ref={sentinelRef} className="story-feed__sentinel">
          <FeedStatus
            loading={loading}
            hasMore={hasMore}
            hasItems={stories.length > 0}
            emptyLabel="모든 이야기를 불러왔습니다"
          />
        </div>
      </div>
    </section>
  )
}
