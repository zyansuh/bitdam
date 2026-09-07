import { useEffect, useState } from 'react'
import type { AuthUser } from '../../../shared/types/auth'
import { listCommunityPosts, saveCommunityPosts } from '../api/communityApi'
import { appendSiteNotice, makeSiteNotice } from '../../notify/utils/siteNoticeStorage'
import type { CommunityCategoryId, CommunityPost } from '../types/communityPost'

interface UseCommunityPostsOptions {
  moderate?: boolean
}

export function useCommunityPosts(user: AuthUser | null, options?: UseCommunityPostsOptions) {
  const moderate = options?.moderate === true
  const [posts, setPosts] = useState<CommunityPost[]>([])
  const [ready, setReady] = useState(false)
  const [tag, setTag] = useState<string | null>(null)
  const [category, setCategory] = useState<CommunityCategoryId>('all')

  useEffect(() => {
    let alive = true
    listCommunityPosts().then((rows) => {
      if (!alive) return
      setPosts(rows)
      setReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  const mine = user ? posts.filter((post) => post.authorId === user.id) : []
  const publicFeed = posts.filter((post) => post.visibility !== 'hidden')
  const visible = moderate ? posts : publicFeed
  const shown = visible.filter((post) => {
    if (category !== 'all' && post.category !== category) return false
    if (tag && !`${post.title} ${post.body} ${post.tags.join(' ')}`.includes(tag.replace('#', ''))) {
      return false
    }
    return true
  })

  function persist(next: CommunityPost[]) {
    setPosts(next)
    void saveCommunityPosts(next)
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
      visibility: 'public',
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
    const post = posts.find((item) => item.id === id)
    persist(
      posts.map((item) =>
        item.id === id
          ? {
              ...item,
              comments: [
                ...item.comments,
                {
                  id: crypto.randomUUID(),
                  authorName: user.nickname,
                  authorImage: user.profileImage,
                  body: body.trim(),
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : item,
      ),
    )
    if (post && post.authorId !== user.id) {
      appendSiteNotice(
        makeSiteNotice({
          kind: 'community',
          title: `${user.nickname}님이 회원님의 글에 댓글을 남겼습니다`,
          body: body.trim().slice(0, 80),
          actionLabel: '댓글 확인하기',
          actionTo: `/community/${id}`,
          audienceId: post.authorId,
        }),
      )
    }
  }

  function setVisibility(id: string, visibility: CommunityPost['visibility']) {
    if (!moderate) return
    persist(posts.map((post) => (post.id === id ? { ...post, visibility } : post)))
  }

  function getPost(id: string) {
    return visible.find((post) => post.id === id)
  }

  return {
    ready,
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
    setVisibility,
    getPost,
  }
}
