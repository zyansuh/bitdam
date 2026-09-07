import type { AuthUser } from '../../../shared/types/auth'
import type { EmailAccount } from '../types/account'

export function mapAccountToUser(account: EmailAccount): AuthUser {
  return {
    id: account.id,
    nickname: account.nickname,
    email: account.email,
    provider: 'email',
    workspaceRole: account.workspaceRole ?? 'member',
    sellerId: account.sellerId,
    sellerBizNo: account.sellerBizNo,
    sellerVerified: account.sellerVerified,
  }
}
