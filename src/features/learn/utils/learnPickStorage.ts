const KEY = 'bitdam.learn.pick'

export function readLearnPick(): string {
  try {
    return localStorage.getItem(KEY)?.trim() ?? ''
  } catch {
    return ''
  }
}

export function writeLearnPick(slug: string): void {
  if (!slug.trim()) {
    localStorage.removeItem(KEY)
    return
  }
  localStorage.setItem(KEY, slug.trim())
}
