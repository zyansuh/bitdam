export type NoticeKind = 'shipping' | 'event' | 'community' | 'system'

export interface SiteNotice {
  id: string
  kind: NoticeKind
  title: string
  body: string
  time: string
  actionLabel: string
  actionTo: string
  audienceId?: string
}
