import { useContext } from 'react'
import { WishlistContext } from '../providers/wishlistProvider'

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist는 WishlistProvider 안에서만 사용할 수 있습니다.')
  }
  return context
}
