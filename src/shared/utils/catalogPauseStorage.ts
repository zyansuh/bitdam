const KEY = 'bitdam.catalog.paused'

export function readPausedProductIds(): number[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id): id is number => typeof id === 'number')
  } catch {
    return []
  }
}

export function writePausedProductIds(ids: number[]): void {
  localStorage.setItem(KEY, JSON.stringify(ids))
}

export function isCatalogPaused(productId: number): boolean {
  return readPausedProductIds().includes(productId)
}

export function toggleCatalogPaused(productId: number): boolean {
  const current = readPausedProductIds()
  const next = current.includes(productId)
    ? current.filter((id) => id !== productId)
    : [...current, productId]
  writePausedProductIds(next)
  return next.includes(productId)
}
