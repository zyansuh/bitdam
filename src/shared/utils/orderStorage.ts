import type { LastOrder } from '../types/order'

const STORAGE_KEY = 'bitdam.lastOrder'

export function readLastOrder(): LastOrder | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }
    return JSON.parse(raw) as LastOrder
  } catch {
    return null
  }
}

export function writeLastOrder(order: LastOrder): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
}

export function createOrderNo(): string {
  const stamp = new Date().toISOString().slice(0, 10).replaceAll('-', '')
  const suffix = String(Date.now()).slice(-4)
  return `BD-${stamp}-${suffix}`
}
