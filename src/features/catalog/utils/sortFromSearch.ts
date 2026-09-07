import type { SortKey } from '../types/catalog'

export const SORT_KEYS: SortKey[] = ['popular', 'priceAsc', 'priceDesc', 'newest', 'recommend']

export function parseSortKey(value: string | null | undefined): SortKey {
  if (value && (SORT_KEYS as string[]).includes(value)) return value as SortKey
  return 'popular'
}
