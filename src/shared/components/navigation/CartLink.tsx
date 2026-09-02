import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../hooks/useCart'

interface CartLinkProps {
  className: string
  badgeClassName: string
  numbered?: boolean
}

export default function CartLink({ className, badgeClassName, numbered = false }: CartLinkProps) {
  const { itemCount } = useCart()

  return (
    <Link to="/cart" aria-label="장바구니" className={className}>
      <ShoppingCart size={20} strokeWidth={1.5} />
      {itemCount > 0 && (
        <span className={badgeClassName}>{numbered ? (itemCount > 9 ? '9+' : itemCount) : null}</span>
      )}
    </Link>
  )
}
