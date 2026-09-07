import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useWishlist } from '../../hooks/useWishlist'

interface WishlistLinkProps {
  className: string
  badgeClassName: string
}

export default function WishlistLink({ className, badgeClassName }: WishlistLinkProps) {
  const { count } = useWishlist()

  return (
    <Link to="/wishlist" aria-label={`위시리스트 ${count}개`} className={className}>
      <Heart size={20} strokeWidth={1.5} />
      {count > 0 ? <span className={badgeClassName} /> : null}
    </Link>
  )
}
