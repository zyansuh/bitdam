import type { CatalogCategory } from '../types/catalog'

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  { slug: 'takju', label: '탁주/막걸리', shortLabel: '막걸리', title: '막걸리 / 탁주', productCategory: '막걸리' },
  { slug: 'yakju', label: '청주/약주', shortLabel: '청주', title: '청주 / 약주', productCategory: '약주' },
  { slug: 'soju', label: '증류식소주', shortLabel: '증류주', title: '증류주', productCategory: '증류주' },
  { slug: 'fruit', label: '과실주', shortLabel: '과실주', title: '과실주', productCategory: '과실주' },
  { slug: 'liqueur', label: '리큐르/기타', shortLabel: '기타', title: '리큐르 / 기타', productCategory: '리큐르' },
]

export function getCategoryBySlug(slug: string | undefined): CatalogCategory | undefined {
  if (!slug) return undefined
  return CATALOG_CATEGORIES.find((category) => category.slug === slug)
}

export function getCategoryByProductCategory(productCategory: string): CatalogCategory | undefined {
  return CATALOG_CATEGORIES.find((category) => category.productCategory === productCategory)
}
