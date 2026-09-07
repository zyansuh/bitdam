import type { AuthUser } from '../../../shared/types/auth'
import { isAdminRole, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import { grantsForAccount } from './cmsGrantStorage'

export function canEditCmsDocument(user: AuthUser | null | undefined, documentId: string): boolean {
  const role = resolveWorkspaceRole(user)
  if (isAdminRole(role)) return true
  if (role !== 'lead' || !user?.id) return false
  return grantsForAccount(user.id).includes(documentId)
}
