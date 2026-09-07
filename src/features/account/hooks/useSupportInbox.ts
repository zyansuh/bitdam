import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import type { SupportTicket } from '../types/accountLists'
import { readSupportTickets, upsertSupportTicket } from '../utils/supportStorage'

export function useSupportInbox() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [items, setItems] = useState<SupportTicket[]>(() =>
    userId ? readSupportTickets().filter((ticket) => ticket.userId === userId) : [],
  )
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function submit() {
    if (!title.trim() || !body.trim() || !user) return
    const ticket: SupportTicket = {
      id: crypto.randomUUID(),
      userId: user.id,
      userName: user.nickname,
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString().slice(0, 10),
      status: 'open',
      replies: [],
    }
    upsertSupportTicket(ticket)
    setItems((current) => [ticket, ...current])
    setTitle('')
    setBody('')
  }

  return { list: items, title, setTitle, body, setBody, submit }
}
