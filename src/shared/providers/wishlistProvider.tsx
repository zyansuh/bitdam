import { createContext, useMemo, useState, type ReactNode } from 'react'
import { getProductById } from '../../data/products'
import type { Product } from '../../data/products'
import type { WishlistLine } from '../types/wishlist'
import { readWishlistLines, writeWishlistLines } from '../utils/wishlistStorage'

export interface WishlistItem {
  product: Product
  addedAt: number
}

interface WishlistContextValue {
  items: WishlistItem[]
  count: number
  has: (productId: number) => boolean
  toggle: (productId: number) => void
  remove: (productId: number) => void
}

export const WishlistContext = createContext<WishlistContextValue | null>(null)

interface WishlistProviderProps {
  children: ReactNode
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [lines, setLines] = useState<WishlistLine[]>(() => {
    const initial = readWishlistLines()
    writeWishlistLines(initial)
    return initial
  })

  function commit(next: WishlistLine[]) {
    writeWishlistLines(next)
    setLines(next)
  }

  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProductById(line.productId)
          return product ? { product, addedAt: line.addedAt } : null
        })
        .filter((item): item is WishlistItem => item !== null),
    [lines],
  )

  const value = useMemo<WishlistContextValue>(
    () => ({
      items,
      count: items.length,
      has: (productId) => lines.some((line) => line.productId === productId),
      toggle: (productId) => {
        if (lines.some((line) => line.productId === productId)) {
          commit(lines.filter((line) => line.productId !== productId))
          return
        }
        commit([{ productId, addedAt: Date.now() }, ...lines])
      },
      remove: (productId) => {
        commit(lines.filter((line) => line.productId !== productId))
      },
    }),
    [items, lines],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
