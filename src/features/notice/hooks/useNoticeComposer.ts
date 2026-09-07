import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import {
  canMarkNoticeImportant,
  canModerateContent,
  canWriteNotice,
  resolveWorkspaceRole,
} from '../../../shared/utils/workspaceRole'
import { getNotice, saveUserNotice } from '../api/noticeApi'
import type { NoticeCategoryId, SiteNoticePost } from '../types/notice'

export function useNoticeComposer(editId?: string) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const [existing, setExisting] = useState<SiteNoticePost | undefined>()
  const [ready, setReady] = useState(!editId)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState<NoticeCategoryId>('service')
  const [important, setImportant] = useState(false)
  const [error, setError] = useState('')

  const isEdit = Boolean(editId)
  const canWrite = isEdit ? canModerateContent(role) : canWriteNotice(role)

  useEffect(() => {
    if (!editId) {
      setReady(true)
      return
    }
    let alive = true
    setReady(false)
    getNotice(editId).then((post) => {
      if (!alive) return
      setExisting(post)
      if (post) {
        setTitle(post.title)
        setBody(post.body)
        setCategory(post.category)
        setImportant(post.important)
      }
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [editId])

  async function submit() {
    setError('')
    if (!canWrite) {
      setError(isEdit ? '공지 수정은 ADMIN만 할 수 있습니다.' : '공지 작성은 직원·팀장·ADMIN만 할 수 있습니다.')
      return
    }
    if (isEdit && !existing) {
      setError('수정할 공지를 찾을 수 없습니다.')
      return
    }
    if (!title.trim() || !body.trim()) {
      setError('제목과 본문을 입력해 주세요.')
      return
    }
    const today = new Date()
    const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`
    const id = existing?.id ?? `u-${crypto.randomUUID()}`
    await saveUserNotice({
      id,
      title: title.trim(),
      body: body.trim(),
      category,
      important: canMarkNoticeImportant(role) ? important : false,
      date: existing?.date ?? date,
      views: existing?.views ?? 0,
      authorId: existing?.authorId ?? user?.id,
      authorName: existing?.authorName ?? user?.nickname,
    })
    navigate(`/notices/${id}`)
  }

  return {
    ready,
    title,
    setTitle,
    body,
    setBody,
    category,
    setCategory,
    important,
    setImportant,
    error,
    submit,
    canWrite,
    canImportant: canMarkNoticeImportant(role),
    isEdit,
    missing: isEdit && ready && !existing,
  }
}
