import { useMemo, useState } from 'react'
import type { WishlistItem } from '../../../shared/providers/wishlistProvider'

export type WishlistSort = 'latest' | 'price' | 'rating'

export function useWishlistSort(items: WishlistItem[]) {
  const [sort, setSort] = useState<WishlistSort>('latest')

  const sorted = useMemo(() => {
    const next = [...items]
    if (sort === 'price') {
      return next.sort((a, b) => a.product.price - b.product.price)
    }
    if (sort === 'rating') {
      return next.sort((a, b) => b.product.rating - a.product.rating)
    }
    return next.sort((a, b) => b.addedAt - a.addedAt)
  }, [items, sort])

  return { sort, setSort, sorted }
}
