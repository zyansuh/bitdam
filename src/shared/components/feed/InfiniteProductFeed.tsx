import { useCallback, useState } from 'react'
import ProductCard from '../../../components/ProductCard'
import { getProductsPage, hasMoreProducts, PAGE_SIZE, type Product } from '../../../data/products'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'

interface InfiniteProductFeedProps {
  title?: string
  subtitle?: string
  initialPage?: number
  pageSize?: number
  showHeader?: boolean
  className?: string
}

export default function InfiniteProductFeed({
  title = '지금 실시간 급상승 술',
  subtitle,
  initialPage = 0,
  pageSize = PAGE_SIZE,
  showHeader = true,
  className = '',
}: InfiniteProductFeedProps) {
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

  return (
    <section className={`bg-cream py-10 sm:py-14 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-xl font-bold text-charcoal sm:text-2xl md:text-3xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1 text-xs text-muted sm:text-sm">{subtitle}</p>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div ref={sentinelRef} className="flex justify-center py-10">
          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-gold border-t-transparent" />
              불러오는 중...
            </div>
          )}
          {!hasMore && items.length > 0 && (
            <p className="text-xs text-muted">모든 상품을 불러왔습니다</p>
          )}
        </div>
      </div>
    </section>
  )
}
