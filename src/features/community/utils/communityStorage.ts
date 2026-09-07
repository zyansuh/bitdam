import type { CommunityPost } from '../types/communityPost'

const STORAGE_KEY = 'bitdam.community.posts'

export function loadCommunityPosts(): CommunityPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCommunityPost).map(normalizeCommunityPost)
  } catch {
    return []
  }
}

export function saveCommunityPosts(posts: CommunityPost[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

export function clearLocalCommunityCache(): void {
  localStorage.removeItem(STORAGE_KEY)
}

function isCommunityPost(value: unknown): value is CommunityPost {
  if (!value || typeof value !== 'object') return false
  const item = value as CommunityPost
  return (
    typeof item.id === 'string' &&
    typeof item.authorId === 'string' &&
    typeof item.authorName === 'string' &&
    typeof item.title === 'string' &&
    typeof item.body === 'string' &&
    typeof item.createdAt === 'string'
  )
}

export function normalizeCommunityPost(value: CommunityPost): CommunityPost {
  return {
    ...value,
    likes: typeof value.likes === 'number' ? value.likes : 0,
    image: typeof value.image === 'string' ? value.image : undefined,
    authorImage: typeof value.authorImage === 'string' ? value.authorImage : undefined,
    category: value.category ?? 'free',
    tags: Array.isArray(value.tags) ? value.tags : [],
    comments: Array.isArray(value.comments) ? value.comments : [],
    visibility: value.visibility === 'hidden' ? 'hidden' : 'public',
  }
}
