import type { NavLinkItem } from '../../../shared/types/navigation'
import { CATALOG_CATEGORIES } from './categories'

export const catalogLightLinks: NavLinkItem[] = [
  { label: '한정판', to: '/products' },
  { label: '양조장', to: '/products' },
  { label: '기획전', to: '/products' },
  { label: '스토리', to: '/story' },
]

export const catalogNavyLinks: NavLinkItem[] = [
  { label: '전체상품', to: '/products' },
  ...CATALOG_CATEGORIES.filter((category) => category.slug !== 'liqueur').map((category) => ({
    label: category.shortLabel,
    to: `/category/${category.slug}`,
  })),
]
