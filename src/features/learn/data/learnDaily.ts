import type { LearnArticle } from '../types/learn'
import { LEARN_ARTICLES } from './learnArticles'
import { listPublishedDrafts, readLearnDrafts } from '../utils/learnDraftStorage'
import { readLearnPick } from '../utils/learnPickStorage'

export const LEARN_DAILY_START_UTC = Date.UTC(2026, 0, 1)
export const MS_PER_DAY = 86_400_000

export function getLearnDayOffset(now = new Date()): number {
  const utc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.floor((utc - LEARN_DAILY_START_UTC) / MS_PER_DAY)
}

export function getLearnUnlockedCount(now = new Date(), length = LEARN_ARTICLES.length): number {
  if (length <= 0) return 0
  const day = getLearnDayOffset(now)
  if (day < 0) return 0
  return Math.min(length, day + 1)
}

export function getLearnDailyIndex(now = new Date(), length = LEARN_ARTICLES.length): number {
  if (length <= 0) return 0
  const day = getLearnDayOffset(now)
  if (day < 0) return 0
  if (day < length) return day
  return ((day % length) + length) % length
}

export function getLearnReleaseDate(index: number): Date {
  return new Date(LEARN_DAILY_START_UTC + index * MS_PER_DAY)
}

export function formatLearnAddedOn(date: Date): string {
  return `${date.getUTCFullYear()}. ${date.getUTCMonth() + 1}. ${date.getUTCDate()}. 추가`
}

export function getLearnAddedOn(article: LearnArticle): Date {
  const index = LEARN_ARTICLES.findIndex((item) => item.slug === article.slug)
  if (index >= 0) return getLearnReleaseDate(index)
  const draft = readLearnDrafts().find((item) => item.slug === article.slug)
  if (!draft) return getLearnReleaseDate(0)
  const [year, month, day] = draft.publishOn.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day))
}

export function isLearnCatalogLocked(slug: string, now = new Date()): boolean {
  const index = LEARN_ARTICLES.findIndex((item) => item.slug === slug)
  if (index < 0) return false
  return index >= getLearnUnlockedCount(now)
}

export function listUnlockedLearn(now = new Date()): LearnArticle[] {
  const catalog = LEARN_ARTICLES.slice(0, getLearnUnlockedCount(now))
  const drafts = listPublishedDrafts(now).filter((item) => !catalog.some((row) => row.slug === item.slug))
  return [...drafts, ...catalog].sort((a, b) => getLearnAddedOn(b).getTime() - getLearnAddedOn(a).getTime())
}

export function getLearnDailyArticle(now = new Date()): LearnArticle {
  const pick = readLearnPick()
  const unlocked = listUnlockedLearn(now)
  const pinned = pick ? unlocked.find((item) => item.slug === pick) : undefined
  if (pinned) return pinned
  const fromCatalog = LEARN_ARTICLES[getLearnDailyIndex(now, LEARN_ARTICLES.length)]
  if (fromCatalog && !isLearnCatalogLocked(fromCatalog.slug, now)) return fromCatalog
  return unlocked[0] ?? LEARN_ARTICLES[0]
}
