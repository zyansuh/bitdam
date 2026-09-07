const KEY = 'bitdam.catalog.stock'

export function readStockOverlay(): Record<string, number> {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as Record<string, number>
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function writeStockOverlay(next: Record<string, number>): void {
  localStorage.setItem(KEY, JSON.stringify(next))
}
