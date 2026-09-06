import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { NoticeCategoryId } from '../types/notice'
import { saveUserNotice } from '../utils/noticeStorage'

export function useNoticeComposer() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState<NoticeCategoryId>('service')
  const [important, setImportant] = useState(false)
  const [error, setError] = useState('')

  function submit() {
    setError('')
    if (!title.trim() || !body.trim()) {
      setError('제목과 본문을 입력해 주세요.')
      return
    }
    const id = `u-${crypto.randomUUID()}`
    const today = new Date()
    const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`
    saveUserNotice({
      id,
      title: title.trim(),
      body: body.trim(),
      category,
      important,
      date,
      views: 0,
    })
    navigate(`/notices/${id}`)
  }

  return { title, setTitle, body, setBody, category, setCategory, important, setImportant, error, submit }
}
