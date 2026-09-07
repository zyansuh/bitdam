import { useEffect, useState } from 'react'
import { listNotices } from '../api/noticeApi'
import type { SiteNoticePost } from '../types/notice'

export function useNoticeDigest() {
  const [important, setImportant] = useState<SiteNoticePost[]>([])
  const [recent, setRecent] = useState<SiteNoticePost[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    listNotices().then((all) => {
      if (!alive) return
      setImportant(all.filter((item) => item.important))
      setRecent(all.slice(0, 8))
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  return { ready, important, recent }
}
