import { useState } from 'react'
import type { AuthUser } from '../../../shared/types/auth'
import type { CommunityCategoryId, CommunityPost } from '../types/communityPost'
import { loadCommunityPosts, saveCommunityPosts } from '../utils/communityStorage'

interface UseCommunityPostsOptions {
  moderate?: boolean
}

export function useCommunityPosts(user: AuthUser | null, options?: UseCommunityPostsOptions) {
  const moderate = options?.moderate === true
  const [posts, setPosts] = useState<CommunityPost[]>(() => loadCommunityPosts())
  const [tag, setTag] = useState<string | null>(null)
  const [category, setCategory] = useState<CommunityCategoryId>('all')

  const mine = user ? posts.filter((post) => post.authorId === user.id) : []
  const visible = moderate ? posts : mine
  const shown = visible.filter((post) => {
    if (category !== 'all' && post.category !== category) return false
    if (tag && !`${post.title} ${post.body} ${post.tags.join(' ')}`.includes(tag.replace('#', ''))) {
      return false
    }
    return true
  })

  function persist(next: CommunityPost[]) {
    setPosts(next)
    saveCommunityPosts(next)
  }

  function addPost(input: {
    title: string
    body: string
    image?: string
    category: Exclude<CommunityCategoryId, 'all'>
    tags: string[]
  }) {
    if (!user) return undefined
    const post: CommunityPost = {
      id: crypto.randomUUID(),
      authorId: user.id,
      authorName: user.nickname,
      authorImage: user.profileImage,
      title: input.title.trim(),
      body: input.body.trim(),
      image: input.image?.trim() || undefined,
      category: input.category,
      tags: input.tags,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
    }
    persist([post, ...posts])
    return post.id
  }

  function updatePost(
    id: string,
    input: {
      title: string
      body: string
      image?: string
      category: Exclude<CommunityCategoryId, 'all'>
      tags: string[]
    },
  ) {
    if (!user) return
    persist(
      posts.map((post) => {
        const allowed = moderate || post.authorId === user.id
        if (post.id !== id || !allowed) return post
        return {
          ...post,
          title: input.title.trim(),
          body: input.body.trim(),
          image: input.image?.trim() || undefined,
          category: input.category,
          tags: input.tags,
        }
      }),
    )
  }

  function removePost(id: string) {
    if (!user) return
    persist(posts.filter((post) => {
      if (post.id !== id) return true
      return !(moderate || post.authorId === user.id)
    }))
  }

  function likePost(id: string) {
    persist(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)))
  }

  function addComment(id: string, body: string) {
    if (!user || !body.trim()) return
    persist(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: crypto.randomUUID(),
                  authorName: user.nickname,
                  authorImage: user.profileImage,
                  body: body.trim(),
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : post,
      ),
    )
  }

  function getPost(id: string) {
    return visible.find((post) => post.id === id)
  }

  return {
    mine,
    visible,
    shown,
    tag,
    setTag,
    category,
    setCategory,
    addPost,
    updatePost,
    removePost,
    likePost,
    addComment,
    getPost,
  }
}
