import type { SiteNotice } from '../types/siteNotice'

const KEY = 'bitdam.notify.events'

export function readLiveNotices(): SiteNotice[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is SiteNotice => {
      if (!item || typeof item !== 'object') return false
      const row = item as SiteNotice
      return typeof row.id === 'string' && typeof row.title === 'string'
    })
  } catch {
    return []
  }
}

export function appendSiteNotice(notice: SiteNotice): void {
  const rows = readLiveNotices()
  localStorage.setItem(KEY, JSON.stringify([notice, ...rows.filter((item) => item.id !== notice.id)]))
}

export function makeSiteNotice(
  input: Omit<SiteNotice, 'id' | 'time'> & { id?: string },
): SiteNotice {
  return {
    ...input,
    id: input.id ?? crypto.randomUUID(),
    time: new Date().toLocaleString('ko-KR'),
  }
}
