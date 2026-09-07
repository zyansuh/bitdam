import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenLounge, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'

export function useLoungeAccess() {
  const { user, isLoggedIn } = useAuth()
  const role = resolveWorkspaceRole(user)
  const allowed = isLoggedIn && canOpenLounge(role)

  return { user, isLoggedIn, role, allowed }
}
