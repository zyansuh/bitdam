export type HelpCategoryId = 'order' | 'shipping' | 'return' | 'member' | 'point' | 'etc'

export interface HelpCategory {
  id: HelpCategoryId
  label: string
  to: string
}

export interface HelpFaq {
  id: string
  category: HelpCategoryId
  question: string
  answer: string
}
