import { NOTICE_PAGE_SIZE } from '../data/noticeSeed'
import type { NoticeCategoryId, SiteNoticePost } from '../types/notice'

export function filterNotices(
  posts: SiteNoticePost[],
  tab: 'all' | NoticeCategoryId,
  query: string,
): SiteNoticePost[] {
  const keyword = query.trim().toLowerCase()
  return posts.filter((post) => {
    const tabOk = tab === 'all' || post.category === tab
    const textOk =
      !keyword ||
      post.title.toLowerCase().includes(keyword) ||
      post.body.toLowerCase().includes(keyword)
    return tabOk && textOk
  })
}

export function paginateNotices(posts: SiteNoticePost[], page: number): SiteNoticePost[] {
  const start = (page - 1) * NOTICE_PAGE_SIZE
  return posts.slice(start, start + NOTICE_PAGE_SIZE)
}

export function noticePageCount(total: number): number {
  return Math.max(1, Math.ceil(total / NOTICE_PAGE_SIZE))
}
