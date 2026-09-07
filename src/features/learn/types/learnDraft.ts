import type { LearnArticle } from './learn'

export interface LearnDraft extends LearnArticle {
  publishOn: string
  source: 'ai' | 'local'
  createdAt: string
}
