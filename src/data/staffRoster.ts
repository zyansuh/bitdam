import type { WorkspaceRole } from '../shared/types/auth'

export interface StaffRosterEntry {
  email: string
  nickname: string
  workspaceRole: WorkspaceRole
  sellerId?: string
}

export const STAFF_ROSTER: StaffRosterEntry[] = [
  { email: 'admin@bitdam.kr', nickname: '빚담 운영', workspaceRole: 'admin' },
  { email: 'seolah@hansan.kr', nickname: '김설아', workspaceRole: 'seller', sellerId: 'hansan' },
  { email: 'seller@andong.kr', nickname: '안동 공방', workspaceRole: 'seller', sellerId: 'andong' },
]

export function findStaffByEmail(email: string | undefined): StaffRosterEntry | undefined {
  if (!email) return undefined
  const normalized = email.trim().toLowerCase()
  return STAFF_ROSTER.find((entry) => entry.email === normalized)
}
