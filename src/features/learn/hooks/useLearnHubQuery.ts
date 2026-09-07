import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { LearnCategoryId, LearnTagId } from '../types/learn'
import { LEARN_CATEGORIES } from '../data/learnCategories'
import { listUnlockedLearn } from '../data/learnDaily'
import { LEARN_TAGS } from '../data/learnTags'
import { filterLearnHub, type LearnHubQuery } from '../utils/filterLearnHub'
import { paginateLearnHub } from '../utils/paginateLearnHub'

function asTag(value: string | null): LearnTagId | '' {
  return LEARN_TAGS.some((item) => item.id === value) ? (value as LearnTagId) : ''
}

function asCategory(value: string | null): LearnCategoryId | '' {
  return LEARN_CATEGORIES.some((item) => item.id === value) ? (value as LearnCategoryId) : ''
}

function asPage(value: string | null): number {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1
}

export function useLearnHubQuery() {
  const [params, setParams] = useSearchParams()
  const query: LearnHubQuery = {
    q: params.get('q') ?? '',
    tag: asTag(params.get('tag')),
    category: asCategory(params.get('cat')),
  }
  const page = asPage(params.get('page'))
  const results = useMemo(() => filterLearnHub(listUnlockedLearn(), query), [query.q, query.tag, query.category])
  const paging = useMemo(() => paginateLearnHub(results, page), [results, page])

  useEffect(() => {
    const id = asCategory(window.location.hash.replace('#', ''))
    if (!id) return
    setParams((current) => {
      if (current.get('cat')) return current
      const next = new URLSearchParams(current)
      next.set('cat', id)
      return next
    }, { replace: true })
  }, [setParams])

  function patch(next: Partial<LearnHubQuery> & { page?: number }) {
    const merged = { ...query, ...next }
    const nextPage = next.page ?? (next.q !== undefined || next.tag !== undefined || next.category !== undefined ? 1 : page)
    const fresh = new URLSearchParams()
    if (merged.q.trim()) fresh.set('q', merged.q.trim())
    if (merged.tag) fresh.set('tag', merged.tag)
    if (merged.category) fresh.set('cat', merged.category)
    if (nextPage > 1) fresh.set('page', String(nextPage))
    setParams(fresh, { replace: true })
  }

  return { query, results, paging, patch }
}
