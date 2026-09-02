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

export interface BrandStoryClosing {
  name: string
  words: BrandStoryWord[]
  join: string
  promises: string[]
  tagline: string[]
  signature: string
  endLines: string[]
}
