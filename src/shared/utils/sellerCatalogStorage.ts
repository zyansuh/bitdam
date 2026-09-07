import type { Product } from '../../data/products'

const KEY = 'bitdam.catalog.seller'
const ID_FLOOR = 1000

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== 'object') return false
  const item = value as Product
  return typeof item.id === 'number' && typeof item.name === 'string' && typeof item.sellerId === 'string'
}

export function readSellerCatalog(): Product[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isProduct) : []
  } catch {
    return []
  }
}

export function writeSellerCatalog(rows: Product[]): void {
  localStorage.setItem(KEY, JSON.stringify(rows))
}

export function upsertSellerProduct(product: Product): void {
  const rows = readSellerCatalog()
  writeSellerCatalog([product, ...rows.filter((item) => item.id !== product.id)])
}

export function nextSellerCatalogId(): number {
  const ids = readSellerCatalog().map((item) => item.id)
  return Math.max(ID_FLOOR, ...ids, ID_FLOOR) + 1
}
