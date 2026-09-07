import type { LearnArticle, LearnCategoryId, LearnTagId } from '../types/learn'

export interface LearnHubQuery {
  q: string
  tag: LearnTagId | ''
  category: LearnCategoryId | ''
}

export function filterLearnHub(articles: LearnArticle[], query: LearnHubQuery): LearnArticle[] {
  const needle = query.q.trim().toLowerCase()
  return articles.filter((item) => {
    if (query.tag && item.tag !== query.tag) return false
    if (query.category && item.category !== query.category) return false
    if (!needle) return true
    const hay = `${item.title} ${item.lead} ${item.question}`.toLowerCase()
    return hay.includes(needle)
  })
}
