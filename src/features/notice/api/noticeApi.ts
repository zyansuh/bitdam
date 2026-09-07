import { idbGet, idbSet } from '../../../shared/utils/bitdamIdb'
import { noticeSeed } from '../data/noticeSeed'
import type { SiteNoticePost } from '../types/notice'
import {
  clearLocalNoticeCache,
  snapshotLocalHiddenNoticeIds,
  snapshotLocalUserNotices,
} from '../utils/noticeStorage'

const USER_KEY = 'notices.user'
const HIDDEN_KEY = 'notices.hidden'

async function loadUserNotices(): Promise<SiteNoticePost[]> {
  const stored = await idbGet<SiteNoticePost[]>(USER_KEY)
  if (stored) return Array.isArray(stored) ? stored : []
  const fromLocal = snapshotLocalUserNotices()
  await idbSet(USER_KEY, fromLocal)
  return fromLocal
}

async function loadHiddenIds(): Promise<string[]> {
  const stored = await idbGet<string[]>(HIDDEN_KEY)
  if (stored) return Array.isArray(stored) ? stored : []
  const fromLocal = snapshotLocalHiddenNoticeIds()
  await idbSet(HIDDEN_KEY, fromLocal)
  return fromLocal
}

function mergeNotices(user: SiteNoticePost[], hiddenIds: string[]): SiteNoticePost[] {
  const hidden = new Set(hiddenIds)
  const overridden = new Set(user.map((post) => post.id))
  const seeds = noticeSeed.filter((post) => !hidden.has(post.id) && !overridden.has(post.id))
  return [...user, ...seeds]
}

export async function listNotices(): Promise<SiteNoticePost[]> {
  const [user, hidden] = await Promise.all([loadUserNotices(), loadHiddenIds()])
  return mergeNotices(user, hidden)
}

export async function getNotice(id: string | undefined): Promise<SiteNoticePost | undefined> {
  if (!id) return undefined
  const posts = await listNotices()
  return posts.find((post) => post.id === id)
}

export async function saveUserNotice(post: SiteNoticePost): Promise<void> {
  const user = await loadUserNotices()
  await idbSet(
    USER_KEY,
    [post, ...user.filter((item) => item.id !== post.id)],
  )
  clearLocalNoticeCache()
}

export async function deleteNotice(id: string): Promise<void> {
  const user = await loadUserNotices()
  await idbSet(
    USER_KEY,
    user.filter((post) => post.id !== id),
  )
  if (noticeSeed.some((post) => post.id === id)) {
    const hidden = await loadHiddenIds()
    if (!hidden.includes(id)) await idbSet(HIDDEN_KEY, [...hidden, id])
  }
  clearLocalNoticeCache()
}
