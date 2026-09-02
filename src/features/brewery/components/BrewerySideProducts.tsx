import ProductCard from '../../../shared/components/product/ProductCard'
import type { Product } from '../../../data/products'

interface BrewerySideProductsProps {
  products: Product[]
}

export default function BrewerySideProducts({ products }: BrewerySideProductsProps) {
  return (
    <section>
      <h2 className="brewery-detail__heading">대표 술</h2>
      {products.length === 0 ? (
        <p className="brewery-detail__muted">등록된 대표 술이 아직 없습니다.</p>
      ) : (
        <div className="brewery-side-products">{products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}</div>
      )}
    </section>
  )
}
