export type LearnCategoryId = 'brew' | 'distill' | 'kinds' | 'names'

export interface LearnCategory {
  id: LearnCategoryId
  kicker: string
  title: string
  lead: string
}

export interface LearnSection {
  heading: string
  paragraphs: string[]
}

export interface LearnArticle {
  slug: string
  category: LearnCategoryId
  title: string
  question: string
  lead: string
  minutes: number
  featured?: boolean
  sections: LearnSection[]
}
