import type { CartLine } from '../types/cart'

const STORAGE_KEY = 'bitdam.cart.lines'

export function readCartLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw) as CartLine[]
    return parsed.filter(
      (line) => Number.isInteger(line.productId) && Number.isInteger(line.quantity) && line.quantity > 0,
    )
  } catch {
    return []
  }
}

export function writeCartLines(lines: CartLine[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
}
