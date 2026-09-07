import type { AuthUser, WorkspaceRole } from '../types/auth'

export function resolveWorkspaceRole(user: AuthUser | null | undefined): WorkspaceRole {
  return user?.workspaceRole ?? 'member'
}

export function canOpenLounge(role: WorkspaceRole): boolean {
  return role === 'seller' || role === 'admin'
}

export function canOpenAdminScope(role: WorkspaceRole): boolean {
  return role === 'admin'
}

export function workspaceRoleLabel(role: WorkspaceRole): string {
  if (role === 'admin') return '회사 직원 (ADMIN)'
  if (role === 'seller') return '입점 셀러 (SELLER)'
  return '일반 회원'
}
