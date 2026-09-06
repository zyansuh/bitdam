export type CommunityCategoryId = 'all' | 'review' | 'tour' | 'recommend' | 'free'

export interface CommunityComment {
  id: string
  authorName: string
  authorImage?: string
  body: string
  createdAt: string
}

export interface CommunityPost {
  id: string
  authorId: string
  authorName: string
  authorImage?: string
  title: string
  body: string
  image?: string
  category: Exclude<CommunityCategoryId, 'all'>
  tags: string[]
  likes: number
  comments: CommunityComment[]
  createdAt: string
}

export interface CommunityDraft {
  title: string
  body: string
  image?: string
  category: Exclude<CommunityCategoryId, 'all'>
  savedAt: string
}
