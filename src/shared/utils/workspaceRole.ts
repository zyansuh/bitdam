import type { AuthUser, WorkspaceRole } from '../types/auth'

export const ASSIGNABLE_ROLES: WorkspaceRole[] = ['member', 'seller', 'staff', 'lead', 'admin']

export function resolveWorkspaceRole(user: AuthUser | null | undefined): WorkspaceRole {
  return user?.workspaceRole ?? 'member'
}

export function canOpenLounge(role: WorkspaceRole): boolean {
  return role === 'seller' || role === 'staff' || role === 'lead' || role === 'admin'
}

export function canPickAllShops(role: WorkspaceRole): boolean {
  return role === 'staff' || role === 'lead' || role === 'admin'
}

export function canOpenAdminScope(role: WorkspaceRole): boolean {
  return role === 'admin'
}

export function canWriteNotice(role: WorkspaceRole): boolean {
  return role === 'staff' || role === 'lead' || role === 'admin'
}

export function canMarkNoticeImportant(role: WorkspaceRole): boolean {
  return role === 'lead' || role === 'admin'
}

export function canEditStory(role: WorkspaceRole): boolean {
  return role === 'lead' || role === 'admin'
}

export function canManagePeople(role: WorkspaceRole): boolean {
  return role === 'admin'
}

export function canViewStaffPerformance(role: WorkspaceRole): boolean {
  return role === 'admin'
}

export function workspaceRoleLabel(role: WorkspaceRole): string {
  if (role === 'admin') return '최고 관리자 (ADMIN)'
  if (role === 'lead') return '팀장'
  if (role === 'staff') return '직원'
  if (role === 'seller') return '입점 셀러 (SELLER)'
  return '일반 회원'
}

export function needsWorkshopVerify(user: AuthUser | null | undefined): boolean {
  return resolveWorkspaceRole(user) === 'seller' && user?.sellerVerified !== true
}
