import { Minus, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CartItem } from '../../../shared/providers/cartProvider'
import { formatWon } from '../../../shared/utils/formatWon'

interface CartItemRowProps {
  item: CartItem
  onQuantity: (quantity: number) => void
  onRemove: () => void
}

export default function CartItemRow({ item, onQuantity, onRemove }: CartItemRowProps) {
  const { product, quantity } = item

  return (
    <article className="cart-item">
      <Link to={`/products/${product.id}`} className="cart-item__media">
        <img src={product.image} alt="" className="cart-item__image" />
      </Link>
      <div className="cart-item__body">
        <Link to={`/products/${product.id}`} className="cart-item__name">
          {product.name}
        </Link>
        <p className="cart-item__meta">
          {product.volumeMl}ml · {product.abv}%
        </p>
        <p className="cart-item__ship">기본 배송 대상</p>
        <div className="cart-item__qty">
          <button type="button" aria-label="수량 줄이기" onClick={() => onQuantity(quantity - 1)}>
            <Minus size={14} />
          </button>
          <span>{quantity}</span>
          <button type="button" aria-label="수량 늘리기" onClick={() => onQuantity(quantity + 1)}>
            <Plus size={14} />
          </button>
        </div>
      </div>
      <p className="cart-item__price">{formatWon(product.price * quantity)}</p>
      <button type="button" className="cart-item__remove" aria-label={`${product.name} 삭제`} onClick={onRemove}>
        <X size={16} />
      </button>
    </article>
  )
}
