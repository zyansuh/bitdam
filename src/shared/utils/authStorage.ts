import type { AuthUser } from '../types/auth'

const STORAGE_KEY = 'bitdam.auth.user'

export function readAuthUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
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
