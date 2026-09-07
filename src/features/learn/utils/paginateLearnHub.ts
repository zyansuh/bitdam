export const LEARN_PAGE_SIZE = 10

export function paginateLearnHub<T>(items: T[], page: number, size = LEARN_PAGE_SIZE) {
  const total = items.length
  const pages = Math.max(1, Math.ceil(total / size) || 1)
  const safePage = Math.min(pages, Math.max(1, page))
  const start = (safePage - 1) * size
  return {
    page: safePage,
    pages,
    total,
    slice: items.slice(start, start + size),
  }
}
