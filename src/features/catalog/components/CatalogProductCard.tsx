import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import type { Product } from '../../../data/products'
import { isSoldOut } from '../../../data/products'
import WishHeartButton from '../../../shared/components/product/WishHeartButton'

interface CatalogProductCardProps {
  product: Product
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  const to = `/products/${product.id}`
  const soldOut = isSoldOut(product)

  return (
    <article>
      <Link to={to} className="catalog-card__link">
        <div className="catalog-card__media">
          <WishHeartButton productId={product.id} overlay />
          <img src={product.image} alt={product.name} className="catalog-card__image" />
          {soldOut ? <span className="catalog-card__sold">품절</span> : null}
        </div>
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
