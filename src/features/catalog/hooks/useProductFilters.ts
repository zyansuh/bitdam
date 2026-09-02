import { useMemo, useState } from 'react'
import { allProducts } from '../../../data/products'
import { PRICE_BOUND } from '../data/filterOptions'
import type { ProductFilterState, SortKey } from '../types/catalog'
import { filterProducts } from '../utils/filterProducts'

const DEFAULT_FILTERS: ProductFilterState = {
  query: '',
  categorySlug: null,
  regions: [],
  priceMin: PRICE_BOUND.min,
  priceMax: PRICE_BOUND.max,
  tasteTags: [],
  abvRangeId: null,
  sort: 'popular',
}

function toggleItem(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value]
}

export function useProductFilters(overrides?: Partial<ProductFilterState>) {
  const [filters, setFilters] = useState<ProductFilterState>({
    ...DEFAULT_FILTERS,
    ...overrides,
  })

  const applied: ProductFilterState = { ...filters, ...overrides }
  const products = useMemo(
    () => filterProducts(allProducts, applied),
    [
      applied.query,
      applied.categorySlug,
      applied.regions,
      applied.priceMin,
      applied.priceMax,
      applied.tasteTags,
      applied.abvRangeId,
      applied.sort,
    ],
  )

  return {
    filters: applied,
    products,
    setQuery: (query: string) => setFilters((prev) => ({ ...prev, query })),
    setCategorySlug: (categorySlug: string | null) =>
      setFilters((prev) => ({ ...prev, categorySlug })),
    toggleRegion: (region: string) =>
      setFilters((prev) => ({ ...prev, regions: toggleItem(prev.regions, region) })),
    setPriceRange: (priceMin: number, priceMax: number) =>
      setFilters((prev) => ({ ...prev, priceMin, priceMax })),
    toggleTasteTag: (tag: string) =>
      setFilters((prev) => ({ ...prev, tasteTags: toggleItem(prev.tasteTags, tag) })),
    setAbvRangeId: (abvRangeId: string | null) =>
      setFilters((prev) => ({ ...prev, abvRangeId })),
    setSort: (sort: SortKey) => setFilters((prev) => ({ ...prev, sort })),
  }
}
