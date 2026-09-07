import type { Product } from '../../../data/products'
import { formatWon } from '../../../shared/utils/formatWon'
import SafeImage from '../../../shared/components/media/SafeImage'

interface ReviewProductCardProps {
  product: Product
}

export default function ReviewProductCard({ product }: ReviewProductCardProps) {
  return (
    <article className="review-product">
      <SafeImage src={product.image} alt="" className="review-product__image" />
      <div>
        <p className="review-product__name">{product.name}</p>
        <p className="review-product__price">{formatWon(product.price)}</p>
      </div>
    </article>
  )
}
