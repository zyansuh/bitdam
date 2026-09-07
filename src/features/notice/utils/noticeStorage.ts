import { noticeSeed } from '../data/noticeSeed'
import type { SiteNoticePost } from '../types/notice'

const KEY = 'bitdam.notices.user'
const HIDDEN_KEY = 'bitdam.notices.hidden'

function readUser(): SiteNoticePost[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as SiteNoticePost[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeUser(posts: SiteNoticePost[]): void {
  localStorage.setItem(KEY, JSON.stringify(posts))
}

function readHidden(): string[] {
  try {
    const raw = localStorage.getItem(HIDDEN_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as string[]
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : []
  } catch {
    return []
  }
}

function writeHidden(ids: string[]): void {
  localStorage.setItem(HIDDEN_KEY, JSON.stringify(ids))
}

export function snapshotLocalUserNotices(): SiteNoticePost[] {
  return readUser()
}

export function snapshotLocalHiddenNoticeIds(): string[] {
  return readHidden()
}

export function clearLocalNoticeCache(): void {
  localStorage.removeItem(KEY)
  localStorage.removeItem(HIDDEN_KEY)
}

export function loadNotices(): SiteNoticePost[] {
  const user = readUser()
  const hidden = new Set(readHidden())
  const overridden = new Set(user.map((post) => post.id))
  const seeds = noticeSeed.filter((post) => !hidden.has(post.id) && !overridden.has(post.id))
  return [...user, ...seeds]
}

export function getNotice(id: string | undefined): SiteNoticePost | undefined {
  if (!id) return undefined
  return loadNotices().find((post) => post.id === id)
}

export function saveUserNotice(post: SiteNoticePost): void {
  writeUser([post, ...readUser().filter((item) => item.id !== post.id)])
}

export function deleteNotice(id: string): void {
  writeUser(readUser().filter((post) => post.id !== id))
  if (noticeSeed.some((post) => post.id === id)) {
    const hidden = readHidden()
    if (!hidden.includes(id)) writeHidden([...hidden, id])
  }
}
