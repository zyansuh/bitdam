export type BrandStoryBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'emphasis'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'scenes'; items: string[] }
  | { type: 'questions'; items: string[] }
  | { type: 'promises'; items: string[] }

export interface BrandStoryChapter {
  id: string
  number: string
  titleLines: string[]
  blocks: BrandStoryBlock[]
}

export interface BrandStoryWord {
  word: string
  meaning: string
}

export interface BrandStoryStat {
  value: string
  label: string
}

export interface BrandStoryCard {
  id: string
  title: string
  text: string
}

export interface BrandStoryProcessStep {
  id: string
  title: string
  text: string
}

export interface BrandStoryFunding {
  id: string
  tag: string
  title: string
  percent: number
  amount: string
  image: string
}

export interface BrandStoryMilestone {
  date: string
  text: string
}

export interface BrandStoryClosing {
  name: string
  words: BrandStoryWord[]
  join: string
  promises: string[]
  tagline: string[]
  signature: string
  endLines: string[]
}
