import { PAGE_SIZE } from '../../../data/products'
import { usePaginatedProducts } from '../../hooks/usePaginatedProducts'
import ProductCard from '../product/ProductCard'
import FeedStatus from './FeedStatus'

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
  const { items, loading, hasMore, sentinelRef } = usePaginatedProducts(initialPage, pageSize)

  return (
    <section className={`product-feed ${className}`.trim()}>
      <div className="product-feed__inner">
        {showHeader && (
          <div className="product-feed__header">
            <div>
              <h2 className="product-feed__title">{title}</h2>
              {subtitle && <p className="product-feed__subtitle">{subtitle}</p>}
            </div>
          </div>
        )}

        <div className="product-feed__grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div ref={sentinelRef} className="product-feed__sentinel">
          <FeedStatus
            loading={loading}
            hasMore={hasMore}
            hasItems={items.length > 0}
            emptyLabel="모든 상품을 불러왔습니다"
          />
        </div>
      </div>
    </section>
  )
}
