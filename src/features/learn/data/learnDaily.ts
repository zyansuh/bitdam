import type { LearnArticle } from '../types/learn'
import { LEARN_ARTICLES } from './learnArticles'

const START = Date.UTC(2026, 0, 1)

export function getLearnDailyArticle(now = new Date()): LearnArticle {
  const utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const day = Math.floor((utc - START) / 86_400_000)
  const list = LEARN_ARTICLES
  const index = ((day % list.length) + list.length) % list.length
  return list[index] ?? list[0]
}
