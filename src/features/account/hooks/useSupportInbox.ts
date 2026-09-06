import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import type { SupportTicket } from '../types/accountLists'
import { readUserList, writeUserList } from '../utils/userListStorage'

const KIND = 'support'

export function useSupportInbox() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [items, setItems] = useState<SupportTicket[]>(() =>
    userId ? readUserList<SupportTicket>(KIND, userId) : [],
  )
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function submit() {
    if (!title.trim() || !body.trim() || !userId) return
    const next: SupportTicket[] = [
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        body: body.trim(),
        createdAt: new Date().toISOString().slice(0, 10),
      },
      ...items,
    ]
    setItems(next)
    writeUserList(KIND, userId, next)
    setTitle('')
    setBody('')
  }

  return { list: items, title, setTitle, body, setBody, submit }
}
