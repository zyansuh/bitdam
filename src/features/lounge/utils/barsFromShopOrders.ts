import { readShopOrders } from '../../../shared/utils/shopOrderStorage'
import type { LoungeMonthBar } from '../types/lounge'

export function barsFromShopOrders(sellerIds: string[]): LoungeMonthBar[] {
  const allowed = new Set(sellerIds)
  const buckets = new Map<string, number>()
  const now = new Date()
  for (let offset = 11; offset >= 0; offset -= 1) {
    const cursor = new Date(now.getFullYear(), now.getMonth() - offset, 1)
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}`
    buckets.set(key, 0)
  }
  for (const order of readShopOrders()) {
    const created = new Date(order.createdAt)
    const key = `${created.getFullYear()}-${String(created.getMonth() + 1).padStart(2, '0')}`
    if (!buckets.has(key)) continue
    const amount = order.lines
      .filter((line) => allowed.has(line.sellerId))
      .reduce((sum, line) => sum + line.price * line.quantity, 0)
    buckets.set(key, (buckets.get(key) ?? 0) + amount)
  }
  return [...buckets.entries()].map(([key, amount]) => ({
    month: `${Number(key.slice(5))}월`,
    amount,
  }))
}
