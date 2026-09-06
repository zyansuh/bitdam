import { useMemo, useState } from 'react'
import { loadNotices } from '../utils/noticeStorage'
import { filterNotices, noticePageCount, paginateNotices } from '../utils/paginateNotices'
import type { NoticeCategoryId } from '../types/notice'

export function useNoticeBoard() {
  const [tab, setTab] = useState<'all' | NoticeCategoryId>('all')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const all = useMemo(() => loadNotices(), [])
  const filtered = useMemo(() => filterNotices(all, tab, query), [all, tab, query])
  const pages = noticePageCount(filtered.length)
  const safePage = Math.min(page, pages)
  const rows = paginateNotices(filtered, safePage)

  function selectTab(next: 'all' | NoticeCategoryId) {
    setTab(next)
    setPage(1)
  }

  function search(next: string) {
    setQuery(next)
    setPage(1)
  }

  return { tab, selectTab, query, search, page: safePage, setPage, pages, rows, total: filtered.length }
}
