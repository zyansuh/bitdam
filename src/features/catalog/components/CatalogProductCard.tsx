import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import type { Product } from '../../../data/products'
import WishHeartButton from '../../../shared/components/product/WishHeartButton'

interface CatalogProductCardProps {
  product: Product
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <article>
      <div className="catalog-card__media">
        <WishHeartButton productId={product.id} overlay />
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} className="catalog-card__image" />
        </Link>
      </div>
      <Link to={`/products/${product.id}`} className="catalog-card__link">
        <p className="catalog-card__region">
          {product.region} · {product.abv}%
        </p>
        <h3 className="catalog-card__name">{product.name}</h3>
        <div className="catalog-card__meta">
          <span className="catalog-card__price">{product.price.toLocaleString()}원</span>
          <span className="catalog-card__rating">
            <Star size={12} className="catalog-card__star" />
            {product.rating}
          </span>
        </div>
      </Link>
    </article>
  )
}
