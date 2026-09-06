import { useEffect, useMemo, useState } from 'react'
import { helpFaqs } from '../data/helpFaqs'
import type { HelpCategoryId } from '../types/helpFaq'
import { filterHelpFaqs } from '../utils/filterHelpFaqs'

export function useHelpFaqs(category: HelpCategoryId, query: string) {
  const items = useMemo(() => filterHelpFaqs(helpFaqs, category, query), [category, query])
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  useEffect(() => {
    setOpenId(items[0]?.id ?? null)
  }, [category, query, items])

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id))
  }

  return { items, openId, toggle, searching: query.trim().length > 0 }
}
