import { idbGet, idbSet } from '../../../shared/utils/bitdamIdb'
import type { CommunityPost } from '../types/communityPost'
import { clearLocalCommunityCache, loadCommunityPosts, normalizeCommunityPost } from '../utils/communityStorage'

const POSTS_KEY = 'community.posts'

export async function listCommunityPosts(): Promise<CommunityPost[]> {
  const stored = await idbGet<CommunityPost[]>(POSTS_KEY)
  if (stored) {
    return Array.isArray(stored) ? stored.map(normalizeCommunityPost) : []
  }
  const fromLocal = loadCommunityPosts()
  await idbSet(POSTS_KEY, fromLocal)
  return fromLocal
}

export async function saveCommunityPosts(posts: CommunityPost[]): Promise<void> {
  await idbSet(POSTS_KEY, posts)
  clearLocalCommunityCache()
}
