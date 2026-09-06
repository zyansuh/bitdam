import { useState } from 'react'
import type { AuthUser } from '../../../shared/types/auth'
import type { CommunityPost } from '../types/communityPost'
import { loadCommunityPosts, saveCommunityPosts } from '../utils/communityStorage'

export function useCommunityPosts(user: AuthUser | null) {
  const [posts, setPosts] = useState<CommunityPost[]>(() => loadCommunityPosts())

  const mine = user ? posts.filter((post) => post.authorId === user.id) : []

  function addPost(title: string, body: string) {
    if (!user) return
    const next: CommunityPost[] = [
      {
        id: crypto.randomUUID(),
        authorId: user.id,
        authorName: user.nickname,
        title: title.trim(),
        body: body.trim(),
        createdAt: new Date().toISOString(),
      },
      ...posts,
    ]
    setPosts(next)
    saveCommunityPosts(next)
  }

  function removePost(id: string) {
    if (!user) return
    const next = posts.filter((post) => !(post.id === id && post.authorId === user.id))
    setPosts(next)
    saveCommunityPosts(next)
  }

  return { mine, addPost, removePost }
}
