import type { CommunityDraft } from '../types/communityPost'

const STORAGE_KEY = 'bitdam.community.draft'

export function loadCommunityDraft(): CommunityDraft | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CommunityDraft
    if (typeof parsed.title !== 'string' || typeof parsed.body !== 'string') return null
    return parsed
  } catch {
    return null
  }
}

export function saveCommunityDraft(draft: CommunityDraft): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
}

export function clearCommunityDraft(): void {
  localStorage.removeItem(STORAGE_KEY)
}
