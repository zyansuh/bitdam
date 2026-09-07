import type { LearnDraft } from '../types/learnDraft'

export const LEARN_DRAFTS_KEY = 'bitdam.learn.drafts'

export function todayKey(now = new Date()): string {
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function readLearnDrafts(): LearnDraft[] {
  try {
    const raw = localStorage.getItem(LEARN_DRAFTS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as LearnDraft[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeLearnDrafts(drafts: LearnDraft[]): void {
  localStorage.setItem(LEARN_DRAFTS_KEY, JSON.stringify(drafts))
}

export function upsertLearnDraft(draft: LearnDraft): void {
  writeLearnDrafts([draft, ...readLearnDrafts().filter((item) => item.slug !== draft.slug)])
}

export function removeLearnDraft(slug: string): void {
  writeLearnDrafts(readLearnDrafts().filter((item) => item.slug !== slug))
}

export function listPublishedDrafts(now = new Date()): LearnDraft[] {
  const today = todayKey(now)
  return readLearnDrafts().filter((item) => item.publishOn <= today)
}

export function isUnpublishedDraft(slug: string, now = new Date()): boolean {
  const draft = readLearnDrafts().find((item) => item.slug === slug)
  if (!draft) return false
  return draft.publishOn > todayKey(now)
}
