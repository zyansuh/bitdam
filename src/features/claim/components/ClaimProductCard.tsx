import { Link } from 'react-router-dom'
import type { Product } from '../../../data/products'
import { formatWon } from '../../../shared/utils/formatWon'

interface ClaimProductCardProps {
  product: Product
  orderNo: string
  quantity: number
}

export default function ClaimProductCard({ product, orderNo, quantity }: ClaimProductCardProps) {
  return (
    <article className="claim-product">
      <Link to={`/products/${product.id}`} className="claim-product__media">
        <img src={product.image} alt="" className="claim-product__image" />
      </Link>
      <div>
        <Link to={`/products/${product.id}`} className="claim-product__name">
          {product.name}
        </Link>
        <p className="claim-product__meta">주문번호 {orderNo}</p>
        <p className="claim-product__meta">
          {quantity}개 · {formatWon(product.price)}
        </p>
      </div>
    </article>
  )
}
