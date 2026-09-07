import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canReplySupport, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import type { SupportTicket } from '../types/accountLists'
import { readSupportTickets, upsertSupportTicket } from '../utils/supportStorage'

export function useSupportDesk() {
  const { user } = useAuth()
  const allowed = canReplySupport(resolveWorkspaceRole(user))
  const [tickets, setTickets] = useState<SupportTicket[]>(() => readSupportTickets())
  const [drafts, setDrafts] = useState<Record<string, string>>({})

  function setDraft(id: string, value: string) {
    setDrafts((current) => ({ ...current, [id]: value }))
  }

  function reply(id: string) {
    if (!user || !allowed) return
    const body = (drafts[id] ?? '').trim()
    if (!body) return
    const current = tickets.find((ticket) => ticket.id === id)
    if (!current) return
    const next: SupportTicket = {
      ...current,
      status: 'answered',
      replies: [
        ...current.replies,
        {
          id: crypto.randomUUID(),
          authorName: user.nickname,
          body,
          createdAt: new Date().toISOString(),
        },
      ],
    }
    upsertSupportTicket(next)
    setTickets(readSupportTickets())
    setDraft(id, '')
  }

  return { allowed, tickets, drafts, setDraft, reply }
}
