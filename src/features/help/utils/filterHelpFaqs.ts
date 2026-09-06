import type { HelpCategoryId, HelpFaq } from '../types/helpFaq'

export function filterHelpFaqs(faqs: HelpFaq[], category: HelpCategoryId, query: string): HelpFaq[] {
  const keyword = query.trim().toLowerCase()
  const inCategory = faqs.filter((item) => item.category === category)
  if (!keyword) return inCategory
  return faqs.filter(
    (item) => item.question.toLowerCase().includes(keyword) || item.answer.toLowerCase().includes(keyword),
  )
}
