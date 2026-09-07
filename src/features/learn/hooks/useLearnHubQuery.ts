import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { LearnCategoryId, LearnTagId } from '../types/learn'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { LEARN_TAGS } from '../data/learnTags'
import { listPublishedLearn } from '../data/learnArticles'
import { filterLearnHub, type LearnHubQuery } from '../utils/filterLearnHub'

function asTag(value: string | null): LearnTagId | '' {
  return LEARN_TAGS.some((item) => item.id === value) ? (value as LearnTagId) : ''
}

function asCategory(value: string | null): LearnCategoryId | '' {
  return LEARN_CATEGORIES.some((item) => item.id === value) ? (value as LearnCategoryId) : ''
}

export function useLearnHubQuery() {
  const [params, setParams] = useSearchParams()
  const query: LearnHubQuery = {
    q: params.get('q') ?? '',
    tag: asTag(params.get('tag')),
    category: asCategory(params.get('cat')),
  }
  const results = useMemo(() => filterLearnHub(listPublishedLearn(), query), [query.q, query.tag, query.category])

  function patch(next: Partial<LearnHubQuery>) {
    const merged = { ...query, ...next }
    const fresh = new URLSearchParams()
    if (merged.q.trim()) fresh.set('q', merged.q.trim())
    if (merged.tag) fresh.set('tag', merged.tag)
    if (merged.category) fresh.set('cat', merged.category)
    setParams(fresh, { replace: true })
  }

  return { query, results, patch }
}
