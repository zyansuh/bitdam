import type { WishlistLine } from '../types/wishlist'

const STORAGE_KEY = 'bitdam.wishlist'

export function readWishlistLines(): WishlistLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as WishlistLine[]
    return parsed.filter((line) => Number.isInteger(line.productId))
  } catch {
    return []
  }
}

export function writeWishlistLines(lines: WishlistLine[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
}
