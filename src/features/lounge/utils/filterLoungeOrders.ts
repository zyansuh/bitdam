import type { LoungeOrder } from '../types/lounge'

export function filterLoungeOrders(
  rows: LoungeOrder[],
  query: string,
  status: LoungeOrder['status'] | 'all',
): LoungeOrder[] {
  const needle = query.trim().toLowerCase()
  return rows.filter((row) => {
    if (status !== 'all' && row.status !== status) return false
    if (!needle) return true
    const hay = `${row.shopOrderId ?? row.id} ${row.product} ${row.buyer}`.toLowerCase()
    return hay.includes(needle)
  })
}
