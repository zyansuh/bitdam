import { allProducts } from '../../data/products'
import type { WishlistLine } from '../types/wishlist'

const STORAGE_KEY = 'bitdam.wishlist'
const SEED_NAMES = ['안동소주 17도', '한산 소곡주', '복분자주', '호랑이배꼽 막걸리']

export function defaultWishlistLines(): WishlistLine[] {
  const now = Date.now()
  return SEED_NAMES.map((name, index) => {
    const product = allProducts.find((item) => item.name === name) ?? allProducts[index]
    return { productId: product.id, addedAt: now - index * 1000 }
  })
}

export function readWishlistLines(): WishlistLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return defaultWishlistLines()
    }
    const parsed = JSON.parse(raw) as WishlistLine[]
    return parsed.filter((line) => Number.isInteger(line.productId))
  } catch {
    return defaultWishlistLines()
  }
}

export function writeWishlistLines(lines: WishlistLine[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
}
