import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../hooks/useCart'

interface CartLinkProps {
  className: string
  badgeClassName: string
}

export default function CartLink({ className, badgeClassName }: CartLinkProps) {
  const { itemCount } = useCart()

  return (
    <Link to="/cart" aria-label={`장바구니 ${itemCount}개`} className={className}>
      <ShoppingCart size={20} strokeWidth={1.5} />
      {itemCount > 0 ? <span className={badgeClassName} /> : null}
    </Link>
  )
}
