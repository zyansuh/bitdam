import type { NoticeCategoryId } from '../types/notice'

export interface NoticeTab {
  id: 'all' | NoticeCategoryId
  label: string
}

export const noticeTabs: NoticeTab[] = [
  { id: 'all', label: '전체' },
  { id: 'service', label: '서비스' },
  { id: 'event', label: '이벤트' },
  { id: 'shipping', label: '배송안내' },
]

export function noticeCategoryLabel(id: NoticeCategoryId): string {
  return noticeTabs.find((tab) => tab.id === id)?.label ?? id
}
