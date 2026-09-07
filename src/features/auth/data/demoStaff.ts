import { STAFF_ROSTER } from '../../../data/staffRoster'
import type { EmailAccount } from '../types/account'

export const DEMO_STAFF_PASSWORD = 'bitdam1234'

export const DEMO_STAFF_ACCOUNTS: EmailAccount[] = STAFF_ROSTER.map((entry) => ({
  id: `email-demo-${entry.email.split('@')[0]}`,
  email: entry.email,
  password: DEMO_STAFF_PASSWORD,
  nickname: entry.nickname,
  workspaceRole: entry.workspaceRole,
  sellerId: entry.sellerId,
}))
