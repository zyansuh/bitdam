import type { WorkspaceRole } from '../shared/types/auth'

export interface StaffRosterEntry {
  email: string
  nickname: string
  workspaceRole: WorkspaceRole
  sellerId?: string
}

export const STAFF_ROSTER: StaffRosterEntry[] = [
  { email: 'admin@bitdam.kr', nickname: '빚담 운영', workspaceRole: 'admin' },
  { email: 'lead@bitdam.kr', nickname: '한 팀장', workspaceRole: 'lead' },
  { email: 'staff@bitdam.kr', nickname: '이 직원', workspaceRole: 'staff' },
  { email: 'seolah@hansan.kr', nickname: '김설아', workspaceRole: 'seller' },
  { email: 'seller@andong.kr', nickname: '안동 공방', workspaceRole: 'seller' },
]

export function findStaffByEmail(email: string | undefined): StaffRosterEntry | undefined {
  if (!email) return undefined
  const normalized = email.trim().toLowerCase()
  return STAFF_ROSTER.find((entry) => entry.email === normalized)
}
