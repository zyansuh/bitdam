export type SortKey = 'popular' | 'priceAsc' | 'priceDesc' | 'rating'

export type FilterSection = 'region' | 'price' | 'taste' | 'abv'

export interface CatalogCategory {
  slug: string
  label: string
  shortLabel: string
  title: string
  productCategory: string
}

export interface AbvRange {
  id: string
  label: string
  min: number
  max: number
}

export interface ProductFilterState {
  query: string
  categorySlug: string | null
  regions: string[]
  priceMin: number
  priceMax: number
  tasteTags: string[]
  abvRangeId: string | null
  sort: SortKey
}
