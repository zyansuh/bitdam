import type { Product } from '../../../data/products'
import { CATALOG_CATEGORIES } from '../data/categories'
import { ABV_RANGES } from '../data/filterOptions'
import type { ProductFilterState } from '../types/catalog'

function matchesQuery(product: Product, query: string): boolean {
  if (!query.trim()) return true
  const needle = query.trim().toLowerCase()
  return (
    product.name.toLowerCase().includes(needle) ||
    product.region.toLowerCase().includes(needle) ||
    product.category.toLowerCase().includes(needle)
  )
}

function matchesCategory(product: Product, categorySlug: string | null): boolean {
  if (!categorySlug) return true
  const category = CATALOG_CATEGORIES.find((item) => item.slug === categorySlug)
  return category ? product.category === category.productCategory : true
}

function matchesRegions(product: Product, regions: string[]): boolean {
  if (regions.length === 0) return true
  return regions.includes(product.regionGroup)
}

function matchesPrice(product: Product, priceMin: number, priceMax: number): boolean {
  return product.price >= priceMin && product.price <= priceMax
}

function matchesTaste(product: Product, tasteTags: string[]): boolean {
  if (tasteTags.length === 0) return true
  return tasteTags.some((tag) => product.tasteTags.includes(tag))
}

function matchesAbv(product: Product, abvRangeId: string | null): boolean {
  if (!abvRangeId) return true
  const range = ABV_RANGES.find((item) => item.id === abvRangeId)
  if (!range) return true
  return product.abv >= range.min && product.abv <= range.max
}

function sortProducts(products: Product[], sort: ProductFilterState['sort']): Product[] {
  const next = [...products]
  if (sort === 'priceAsc') return next.sort((a, b) => a.price - b.price)
  if (sort === 'priceDesc') return next.sort((a, b) => b.price - a.price)
  if (sort === 'rating') return next.sort((a, b) => b.rating - a.rating)
  return next.sort((a, b) => b.rating - a.rating || b.price - a.price)
}

export function filterProducts(products: Product[], filters: ProductFilterState): Product[] {
  const filtered = products.filter(
    (product) =>
      matchesQuery(product, filters.query) &&
      matchesCategory(product, filters.categorySlug) &&
      matchesRegions(product, filters.regions) &&
      matchesPrice(product, filters.priceMin, filters.priceMax) &&
      matchesTaste(product, filters.tasteTags) &&
      matchesAbv(product, filters.abvRangeId),
  )
  return sortProducts(filtered, filters.sort)
}
