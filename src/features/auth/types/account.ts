import type { WorkspaceRole } from '../../../shared/types/auth'

export type EmailAccount = {
  id: string
  email: string
  password: string
  nickname: string
  workspaceRole?: WorkspaceRole
  sellerId?: string
  sellerBizNo?: string
  sellerVerified?: boolean
}
