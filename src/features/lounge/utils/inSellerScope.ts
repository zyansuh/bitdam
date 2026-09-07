export function inSellerScope<T extends { sellerId: string }>(rows: T[], sellerIds: string[]): T[] {
  if (sellerIds.length === 0) return []
  return rows.filter((row) => sellerIds.includes(row.sellerId))
}
