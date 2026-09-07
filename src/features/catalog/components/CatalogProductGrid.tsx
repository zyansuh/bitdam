import type { Product } from '../../../data/products'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import CatalogProductCard from './CatalogProductCard'

interface CatalogProductGridProps {
  products: Product[]
}

export default function CatalogProductGrid({ products }: CatalogProductGridProps) {
  if (products.length === 0) {
    return (
      <EmptyState title="조건에 맞는 상품이 없습니다" body="검색어나 필터를 조정해 보세요." />
    )
  }

  return (
    <div className="catalog-grid">
      {products.map((product) => (
        <CatalogProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
