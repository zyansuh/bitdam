import { helpNav } from '../../../data/helpNav'
import type { HelpCategory, HelpCategoryId } from '../types/helpFaq'

const ids: HelpCategoryId[] = ['order', 'shipping', 'return', 'member', 'point', 'etc']

export const helpCategories: HelpCategory[] = helpNav.map((item, index) => ({
  id: ids[index],
  label: item.label,
  to: item.to,
}))

export function getHelpCategory(id: string | undefined): HelpCategory | undefined {
  return helpCategories.find((item) => item.id === id)
}

export function isHelpCategoryId(id: string | undefined): id is HelpCategoryId {
  return helpCategories.some((item) => item.id === id)
}
