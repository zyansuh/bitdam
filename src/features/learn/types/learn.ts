export type LearnCategoryId =
  | 'brew'
  | 'distill'
  | 'kinds'
  | 'names'
  | 'grain'
  | 'ferment'
  | 'distill-deep'
  | 'oak'
  | 'world'

export type LearnTagId = 'three-min' | 'distill-story' | 'our-sool' | 'oak-story' | 'world-sool'

export type LearnTone = 'principle' | 'process'

export interface LearnCategory {
  id: LearnCategoryId
  kicker: string
  title: string
  lead: string
}

export interface LearnTag {
  id: LearnTagId
  label: string
  hint: string
}

export interface LearnSection {
  heading: string
  paragraphs: string[]
}

export interface LearnArticle {
  slug: string
  category: LearnCategoryId
  tag: LearnTagId
  tone: LearnTone
  title: string
  question: string
  lead: string
  minutes: number
  featured?: boolean
  sections: LearnSection[]
  takeaways: string[]
}
