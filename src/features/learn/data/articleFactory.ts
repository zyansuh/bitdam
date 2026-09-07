import type { LearnArticle, LearnCategoryId, LearnSection } from '../types/learn'
import { LEARN_CATEGORY_DEFAULTS } from './learnTags'

export function article(
  slug: string,
  category: LearnCategoryId,
  title: string,
  lead: string,
  sections: LearnSection[],
  takeaways: string[],
  featured = false,
): LearnArticle {
  const defaults = LEARN_CATEGORY_DEFAULTS[category]
  const length =
    sections.reduce((sum, section) => sum + section.paragraphs.join('').length, 0) +
    takeaways.join('').length
  return {
    slug,
    category,
    tag: defaults.tag,
    tone: defaults.tone,
    title,
    question: title,
    lead,
    minutes: Math.max(3, Math.min(6, Math.round(length / 380))),
    featured,
    sections,
    takeaways,
    cover: `/images/learn/${category}.svg`,
  }
}
