import { useCallback, useEffect, useRef } from 'react'

interface UseInfiniteScrollOptions {
  enabled?: boolean
  rootMargin?: string
  threshold?: number
}

export function useInfiniteScroll(
  onLoadMore: () => void,
  { enabled = true, rootMargin = '200px', threshold = 0 }: UseInfiniteScrollOptions = {},
) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const onLoadMoreRef = useRef(onLoadMore)

  useEffect(() => {
    onLoadMoreRef.current = onLoadMore
  }, [onLoadMore])

  const stableLoadMore = useCallback(() => {
    onLoadMoreRef.current()
  }, [])

  useEffect(() => {
    if (!enabled) return

    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          stableLoadMore()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [enabled, rootMargin, threshold, stableLoadMore])

  return sentinelRef
}
