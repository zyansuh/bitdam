import { Heart } from 'lucide-react'
import { useWishlist } from '../../hooks/useWishlist'

interface WishHeartButtonProps {
  productId: number
  overlay?: boolean
}

export default function WishHeartButton({ productId, overlay = false }: WishHeartButtonProps) {
  const { has, toggle } = useWishlist()
  const on = has(productId)

  return (
    <button
      type="button"
      className={
        overlay
          ? on
            ? 'wish-heart wish-heart--overlay wish-heart--on'
            : 'wish-heart wish-heart--overlay'
          : on
            ? 'wish-heart wish-heart--plain wish-heart--on'
            : 'wish-heart wish-heart--plain'
      }
      aria-label={on ? '위시리스트에서 제거' : '위시리스트에 담기'}
      aria-pressed={on}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggle(productId)
      }}
    >
      <Heart size={18} strokeWidth={1.6} fill={on ? 'currentColor' : 'none'} />
    </button>
  )
}
