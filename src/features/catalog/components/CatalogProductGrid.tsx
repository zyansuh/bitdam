import type { Product } from '../../../data/products'
import CatalogProductCard from './CatalogProductCard'

interface CatalogProductGridProps {
  products: Product[]
}

export default function CatalogProductGrid({ products }: CatalogProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="catalog-empty">조건에 맞는 상품이 없습니다. 필터를 조정해 보세요.</p>
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
