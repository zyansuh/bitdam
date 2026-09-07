const STORAGE_KEY = 'bitdam.lounge.scope'

export function readLoungeScope(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

export function writeLoungeScope(scopeId: string): void {
  sessionStorage.setItem(STORAGE_KEY, scopeId)
}
