import type { NoticeKind } from '../types/siteNotice'

export interface NoticeTab {
  id: 'all' | NoticeKind
  label: string
}

export const noticeTabs: NoticeTab[] = [
  { id: 'all', label: '전체' },
  { id: 'shipping', label: '주문/배송' },
  { id: 'event', label: '이벤트' },
  { id: 'community', label: '커뮤니티' },
  { id: 'system', label: '시스템' },
]
