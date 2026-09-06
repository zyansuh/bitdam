import { noticeSeed } from '../data/noticeSeed'
import type { SiteNoticePost } from '../types/notice'

const KEY = 'bitdam.notices.user'

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

export function loadNotices(): SiteNoticePost[] {
  return [...readUser(), ...noticeSeed]
}

export function saveUserNotice(post: SiteNoticePost): void {
  localStorage.setItem(KEY, JSON.stringify([post, ...readUser()]))
}
