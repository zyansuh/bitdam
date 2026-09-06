import { useMemo } from 'react'
import { loadNotices } from '../utils/noticeStorage'

export function useNoticeDetail(id: string | undefined) {
  return useMemo(() => loadNotices().find((item) => item.id === id), [id])
}
