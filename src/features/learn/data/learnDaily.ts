import type { LearnArticle } from '../types/learn'
import { LEARN_ARTICLES } from './learnArticles'
import { readLearnPick } from '../utils/learnPickStorage'

export const LEARN_DAILY_START_UTC = Date.UTC(2026, 0, 1)

export function getLearnDailyIndex(now = new Date(), length = LEARN_ARTICLES.length): number {
  const utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const day = Math.floor((utc - LEARN_DAILY_START_UTC) / 86_400_000)
  if (length <= 0) return 0
  return ((day % length) + length) % length
}

export function getLearnDailyArticle(now = new Date()): LearnArticle {
  const pick = readLearnPick()
  const pinned = pick ? LEARN_ARTICLES.find((item) => item.slug === pick) : undefined
  if (pinned) return pinned
  const list = LEARN_ARTICLES
  return list[getLearnDailyIndex(now, list.length)] ?? list[0]
}
