export type WorkspaceRole = 'member' | 'seller' | 'staff' | 'lead' | 'admin'

export interface AuthUser {
  id: string
  nickname: string
  profileImage?: string
  email?: string
  phone?: string
  birth?: string
  interests?: string[]
  provider: 'kakao' | 'email'
  workspaceRole?: WorkspaceRole
  sellerId?: string
  sellerBizNo?: string
  sellerVerified?: boolean
}
