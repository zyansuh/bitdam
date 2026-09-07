import type { WorkspaceRole } from '../../../shared/types/auth'

export interface StaffPerformanceRow {
  id: string
  name: string
  role: WorkspaceRole
  email: string
  notices: number
  loungeReviews: number
  shopsCovered: number
  score: number
}
