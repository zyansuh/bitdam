export const MAX_COMPARE_ITEMS = 4

export function parseCompareIds(raw: string | null): number[] {
  if (!raw) {
    return []
  }

  const seen = new Set<number>()
  const ids: number[] = []

  for (const token of raw.split(',')) {
    const id = Number(token.trim())
    if (!Number.isInteger(id) || id <= 0 || seen.has(id)) {
      continue
    }
    seen.add(id)
    ids.push(id)
    if (ids.length >= MAX_COMPARE_ITEMS) {
      break
    }
  }

  return ids
}

export function buildComparePath(ids: number[]): string {
  const unique = parseCompareIds(ids.join(','))
  if (unique.length === 0) {
    return '/compare'
  }

  return `/compare?ids=${unique.join(',')}`
}
