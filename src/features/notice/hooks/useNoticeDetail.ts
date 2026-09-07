import { useEffect, useState } from 'react'
import { getNotice } from '../api/noticeApi'
import type { SiteNoticePost } from '../types/notice'

export function useNoticeDetail(id: string | undefined) {
  const [post, setPost] = useState<SiteNoticePost | undefined>()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    setReady(false)
    getNotice(id).then((found) => {
      if (!alive) return
      setPost(found)
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [id])

  return { post, ready }
}
