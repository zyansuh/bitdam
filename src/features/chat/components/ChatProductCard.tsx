import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import type { ChatProductRef } from '../types/chat'

interface ChatProductCardProps {
  product: ChatProductRef
}

export default function ChatProductCard({ product }: ChatProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="chat-product">
      <img src={product.image} alt="" className="chat-product__image" />
      <div>
        <p className="chat-product__name">{product.name}</p>
        <p className="chat-product__meta">
          {product.category} · {product.abv}% · {formatWon(product.price)}
        </p>
      </div>
    </Link>
  )
}
