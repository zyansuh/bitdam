import { useMemo, useState } from 'react'
import { noticeMock } from '../data/noticeMock'
import type { NoticeKind } from '../types/siteNotice'

const READ_KEY = 'bitdam.notify.read'

function readIds(): string[] {
  try {
    const raw = localStorage.getItem(READ_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as string[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useSiteNotices() {
  const [tab, setTab] = useState<'all' | NoticeKind>('all')
  const [read, setRead] = useState<string[]>(() => readIds())

  const items = useMemo(
    () => (tab === 'all' ? noticeMock : noticeMock.filter((item) => item.kind === tab)),
    [tab],
  )

  function persist(next: string[]) {
    setRead(next)
    localStorage.setItem(READ_KEY, JSON.stringify(next))
  }

  function markRead(id: string) {
    if (read.includes(id)) return
    persist([...read, id])
  }

  function markAllRead() {
    persist([...new Set([...read, ...noticeMock.map((item) => item.id)])])
  }

  return { tab, setTab, items, read, markRead, markAllRead }
}
