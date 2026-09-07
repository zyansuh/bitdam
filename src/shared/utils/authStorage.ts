import type { AuthUser } from '../types/auth'
import { findStaffByEmail } from '../../data/staffRoster'

const STORAGE_KEY = 'bitdam.auth.user'

function hydrateWorkspace(user: AuthUser): AuthUser {
  const staff = findStaffByEmail(user.email)
  if (staff) {
    return {
      ...user,
      workspaceRole: staff.workspaceRole,
      sellerId: staff.sellerId,
    }
  }

  return {
    ...user,
    workspaceRole: user.workspaceRole ?? 'member',
  }
}

export function readAuthUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return hydrateWorkspace(JSON.parse(raw) as AuthUser)
  } catch {
    return null
  }
}

export function writeAuthUser(user: AuthUser): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function clearAuthUser(): void {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem('kakao.redirect_uri')
}
