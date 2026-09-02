const RETURN_PATH_KEY = 'bitdam.auth.return_to'

export function isSafeReturnPath(path: string): boolean {
  if (!path.startsWith('/')) return false
  if (path.startsWith('//')) return false
  if (path.startsWith('/login') || path.startsWith('/signup')) return false
  return true
}

export function saveLoginReturnPath(path: string): void {
  if (!isSafeReturnPath(path)) return
  sessionStorage.setItem(RETURN_PATH_KEY, path)
}

export function readLoginReturnPath(): string {
  const stored = sessionStorage.getItem(RETURN_PATH_KEY)
  if (stored && isSafeReturnPath(stored)) return stored
  return '/'
}

export function clearLoginReturnPath(): void {
  sessionStorage.removeItem(RETURN_PATH_KEY)
}
