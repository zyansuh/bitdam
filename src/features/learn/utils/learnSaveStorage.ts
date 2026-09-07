const KEY = 'bitdam.learn.library'

export interface LearnLibrary {
  read: string[]
  saved: string[]
}

function empty(): LearnLibrary {
  return { read: [], saved: [] }
}

export function readLearnLibrary(): LearnLibrary {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const parsed = JSON.parse(raw) as LearnLibrary
    return {
      read: Array.isArray(parsed.read) ? parsed.read : [],
      saved: Array.isArray(parsed.saved) ? parsed.saved : [],
    }
  } catch {
    return empty()
  }
}

export function writeLearnLibrary(library: LearnLibrary): void {
  localStorage.setItem(KEY, JSON.stringify(library))
}

export function markLearnRead(slug: string): LearnLibrary {
  const current = readLearnLibrary()
  const next = { ...current, read: [slug, ...current.read.filter((item) => item !== slug)] }
  writeLearnLibrary(next)
  return next
}

export function toggleLearnSaved(slug: string): LearnLibrary {
  const current = readLearnLibrary()
  const saved = current.saved.includes(slug)
    ? current.saved.filter((item) => item !== slug)
    : [slug, ...current.saved]
  const next = { ...current, saved }
  writeLearnLibrary(next)
  return next
}
