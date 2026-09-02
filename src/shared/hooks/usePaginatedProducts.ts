import { useCallback, useState } from 'react'
import { getProductsPage, hasMoreProducts, PAGE_SIZE, type Product } from '../../data/products'
import { useInfiniteScroll } from './useInfiniteScroll'

export function usePaginatedProducts(initialPage = 0, pageSize = PAGE_SIZE) {
  const [page, setPage] = useState(initialPage)
  const [items, setItems] = useState<Product[]>(() => getProductsPage(initialPage, pageSize))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(() => hasMoreProducts(initialPage, pageSize))

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return

    setLoading(true)
    const nextPage = page + 1

    requestAnimationFrame(() => {
      setTimeout(() => {
        const nextItems = getProductsPage(nextPage, pageSize)
        setItems((prev) => [...prev, ...nextItems])
        setPage(nextPage)
        setHasMore(hasMoreProducts(nextPage, pageSize))
        setLoading(false)
      }, 400)
    })
  }, [loading, hasMore, page, pageSize])

  const sentinelRef = useInfiniteScroll(loadMore, { enabled: hasMore && !loading })

  return { items, loading, hasMore, sentinelRef }
}
