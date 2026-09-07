import { useMemo, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { readUserList } from '../../account/utils/userListStorage'
import { noticeMock } from '../data/noticeMock'
import type { NoticeKind, SiteNotice } from '../types/siteNotice'
import { readLiveNotices } from '../utils/siteNoticeStorage'

const READ_KEY = 'bitdam.notify.read'

interface NotifyPrefs {
  order: boolean
  marketing: boolean
  tour: boolean
}

const defaults: NotifyPrefs = { order: true, marketing: false, tour: true }

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

function prefsFor(userId: string): NotifyPrefs {
  if (!userId) return defaults
  return readUserList<NotifyPrefs>('notify', userId)[0] ?? defaults
}

function isAllowed(item: SiteNotice, prefs: NotifyPrefs): boolean {
  if (item.kind === 'shipping') return prefs.order
  if (item.kind === 'event' && item.actionTo.startsWith('/mypage/reservations')) return prefs.tour
  if (item.kind === 'event') return prefs.marketing
  return true
}

export function useSiteNotices() {
  const { user } = useAuth()
  const [tab, setTab] = useState<'all' | NoticeKind>('all')
  const [read, setRead] = useState<string[]>(() => readIds())
  const prefs = prefsFor(user?.id ?? '')

  const feed = useMemo(() => {
    const live = readLiveNotices().filter((item) => !item.audienceId || item.audienceId === user?.id)
    const merged = [...live, ...noticeMock]
    const visible = user ? merged.filter((item) => isAllowed(item, prefs)) : merged.filter((item) => !item.audienceId)
    return tab === 'all' ? visible : visible.filter((item) => item.kind === tab)
  }, [prefs.marketing, prefs.order, prefs.tour, tab, user])

  function persist(next: string[]) {
    setRead(next)
    localStorage.setItem(READ_KEY, JSON.stringify(next))
  }

  function markRead(id: string) {
    if (read.includes(id)) return
    persist([...read, id])
  }

  function markAllRead() {
    persist([...new Set([...read, ...feed.map((item) => item.id)])])
  }

  return { tab, setTab, items: feed, read, markRead, markAllRead }
}
