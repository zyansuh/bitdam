import type { EmailAccount } from '../../auth/types/account'
import { canPickAllShops } from '../../../shared/utils/workspaceRole'
import type { StaffPerformanceRow } from '../types/staff'

interface PerformanceCounts {
  notices: number
  communityPosts: number
  shopCount: number
}

export function performanceForAccount(account: EmailAccount, counts: PerformanceCounts): StaffPerformanceRow {
  const role = account.workspaceRole ?? 'member'
  const shopsCovered = canPickAllShops(role) ? counts.shopCount : account.sellerId ? 1 : 0
  return {
    id: account.id,
    name: account.nickname,
    role,
    email: account.email,
    notices: counts.notices,
    loungeReviews: counts.communityPosts,
    shopsCovered,
    score: counts.notices * 12 + counts.communityPosts * 5 + shopsCovered * 8,
  }
}
