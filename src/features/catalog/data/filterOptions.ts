import type { AbvRange, SortKey } from '../types/catalog'

export const REGION_GROUPS = ['서울/경기', '강원', '충청', '전라', '경상', '제주'] as const

export const TASTE_TAGS = ['#단맛', '#산미', '#바디감', '#탄닌', '#향'] as const

export const ABV_RANGES: AbvRange[] = [
  { id: 'le5', label: '5% 이하', min: 0, max: 5 },
  { id: '6-10', label: '6–10%', min: 6, max: 10 },
  { id: '11-20', label: '11–20%', min: 11, max: 20 },
  { id: '21-plus', label: '21% 이상', min: 21, max: 100 },
]

export const PRICE_BOUND = {
  min: 0,
  max: 100000,
} as const

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'popular', label: '인기순' },
  { key: 'priceAsc', label: '낮은 가격순' },
  { key: 'priceDesc', label: '높은 가격순' },
  { key: 'rating', label: '평점순' },
]
