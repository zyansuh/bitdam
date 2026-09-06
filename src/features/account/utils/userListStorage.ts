function readJson<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return []
    const parsed = JSON.parse(raw) as T[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeJson<T>(key: string, value: T[]): void {
  localStorage.setItem(key, JSON.stringify(value))
}

export function listKey(kind: string, userId: string): string {
  return `bitdam.account.${kind}.${userId}`
}

export function readUserList<T>(kind: string, userId: string): T[] {
  return readJson<T>(listKey(kind, userId))
}

export function writeUserList<T>(kind: string, userId: string, value: T[]): void {
  writeJson(listKey(kind, userId), value)
}
