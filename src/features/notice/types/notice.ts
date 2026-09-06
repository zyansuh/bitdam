export type NoticeCategoryId = 'service' | 'event' | 'shipping'

export interface SiteNoticePost {
  id: string
  category: NoticeCategoryId
  title: string
  body: string
  date: string
  views: number
  important: boolean
}
