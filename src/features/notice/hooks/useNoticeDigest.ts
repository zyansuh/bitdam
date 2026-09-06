import { useMemo } from 'react'
import { loadNotices } from '../utils/noticeStorage'

export function useNoticeDigest() {
  return useMemo(() => {
    const all = loadNotices()
    return {
      important: all.filter((item) => item.important),
      recent: all.slice(0, 8),
    }
  }, [])
}
