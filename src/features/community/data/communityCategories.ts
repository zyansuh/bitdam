import type { CommunityCategoryId } from '../types/communityPost'

export interface CommunityCategory {
  id: CommunityCategoryId
  label: string
}

export const COMMUNITY_CATEGORIES: CommunityCategory[] = [
  { id: 'all', label: '전체 글' },
  { id: 'review', label: '술 평가 · 후기' },
  { id: 'tour', label: '양조장 투어' },
  { id: 'recommend', label: '우리 술 추천' },
  { id: 'free', label: '정보 공유 · 자유' },
]

export function communityCategoryLabel(id: Exclude<CommunityCategoryId, 'all'> | string) {
  return COMMUNITY_CATEGORIES.find((item) => item.id === id)?.label ?? '자유'
}
