import { listAccounts } from '../../auth/utils/accountStorage'
import type { SupportTicket } from '../types/accountLists'
import { readUserList, writeUserList } from './userListStorage'

const KEY = 'bitdam.support.tickets'

function isTicket(value: unknown): value is SupportTicket {
  if (!value || typeof value !== 'object') return false
  const item = value as SupportTicket
  return typeof item.id === 'string' && typeof item.title === 'string' && typeof item.body === 'string'
}

function normalize(ticket: SupportTicket): SupportTicket {
  return {
    ...ticket,
    userId: ticket.userId ?? '',
    userName: ticket.userName ?? '회원',
    status: ticket.status === 'answered' ? 'answered' : 'open',
    replies: Array.isArray(ticket.replies) ? ticket.replies : [],
  }
}

function migrateFromUserLists(): SupportTicket[] {
  const rows: SupportTicket[] = []
  for (const account of listAccounts()) {
    const legacy = readUserList<SupportTicket>('support', account.id)
    for (const ticket of legacy) {
      rows.push(
        normalize({
          ...ticket,
          userId: account.id,
          userName: account.nickname,
        }),
      )
    }
    if (legacy.length > 0) writeUserList('support', account.id, [])
  }
  return rows
}

export function readSupportTickets(): SupportTicket[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) {
      const migrated = migrateFromUserLists()
      if (migrated.length > 0) writeSupportTickets(migrated)
      return migrated
    }
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isTicket).map(normalize) : []
  } catch {
    return []
  }
}

export function writeSupportTickets(rows: SupportTicket[]): void {
  localStorage.setItem(KEY, JSON.stringify(rows))
}

export function upsertSupportTicket(ticket: SupportTicket): void {
  const rows = readSupportTickets()
  writeSupportTickets([ticket, ...rows.filter((item) => item.id !== ticket.id)])
}
