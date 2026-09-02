import { useCallback, useState } from 'react'
import { generateStories } from '../../data/stories'
import { useInfiniteScroll } from './useInfiniteScroll'

const STORY_PAGE_SIZE = 4
const STORY_LIMIT = 24

export function usePaginatedStories() {
  const [stories, setStories] = useState(() => generateStories(0, STORY_PAGE_SIZE))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    requestAnimationFrame(() => {
      setTimeout(() => {
        setStories((prev) => {
          const next = [...prev, ...generateStories(prev.length, STORY_PAGE_SIZE)]
          if (next.length >= STORY_LIMIT) setHasMore(false)
          return next
        })
        setLoading(false)
      }, 350)
    })
  }, [loading, hasMore])

  const sentinelRef = useInfiniteScroll(loadMore, { enabled: hasMore && !loading })

  return { stories, loading, hasMore, sentinelRef }
}
