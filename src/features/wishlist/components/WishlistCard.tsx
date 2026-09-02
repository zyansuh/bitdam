import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import type { Product } from '../../../data/products'
import { useCart } from '../../../shared/hooks/useCart'
import { formatWon } from '../../../shared/utils/formatWon'
import WishHeartButton from '../../../shared/components/product/WishHeartButton'

interface WishlistCardProps {
  product: Product
}

export default function WishlistCard({ product }: WishlistCardProps) {
  const { addItem } = useCart()

  return (
    <article className="wish-card">
      <div className="wish-card__media">
        <WishHeartButton productId={product.id} overlay />
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} className="wish-card__image" />
        </Link>
      </div>
      <p className="wish-card__brewery">{product.brewery}</p>
      <Link to={`/products/${product.id}`} className="wish-card__name">
        {product.name}
      </Link>
      <p className="wish-card__rating">
        <Star size={12} className="wish-card__star" />
        {product.rating} ({product.reviewCount.toLocaleString()})
      </p>
      <p className="wish-card__price">{formatWon(product.price)}</p>
      <button type="button" className="wish-card__cart" onClick={() => addItem(product.id, 1)}>
        장바구니 담기
      </button>
    </article>
  )
}
