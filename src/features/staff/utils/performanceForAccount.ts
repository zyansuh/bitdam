import type { EmailAccount } from '../../auth/types/account'
import type { StaffPerformanceRow } from '../types/staff'

export function performanceForAccount(account: EmailAccount): StaffPerformanceRow {
  const seed = account.email.length + (account.nickname?.length ?? 0)
  const notices = 2 + (seed % 9)
  const loungeReviews = 4 + (seed % 14)
  const shopsCovered = 3 + (seed % 8)
  return {
    id: account.id,
    name: account.nickname,
    role: account.workspaceRole ?? 'member',
    email: account.email,
    notices,
    loungeReviews,
    shopsCovered,
    score: notices * 12 + loungeReviews * 5 + shopsCovered * 8,
  }
}
