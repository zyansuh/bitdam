import { Star } from 'lucide-react'
import type { Product } from '../../../data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>
      <p className="product-card__category">{product.category}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <div className="product-card__meta">
        <span className="product-card__price">{product.price.toLocaleString()}원</span>
        <span className="product-card__rating">
          <Star size={12} className="product-card__star" />
          {product.rating}
        </span>
      </div>
    </article>
  )
}
