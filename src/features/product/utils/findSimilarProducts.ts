import type { Product } from '../../../data/products'
import { allProducts } from '../../../data/products'

function tasteDistance(left: Product, right: Product): number {
  return (
    Math.abs(left.taste.sweet - right.taste.sweet) +
    Math.abs(left.taste.sour - right.taste.sour) +
    Math.abs(left.taste.body - right.taste.body) +
    Math.abs(left.taste.fresh - right.taste.fresh)
  )
}

export function findSimilarProducts(product: Product, limit = 2): Product[] {
  return allProducts
    .filter((candidate) => candidate.id !== product.id)
    .map((candidate) => {
      let score = 0
      if (candidate.category === product.category) score += 6
      if (candidate.regionGroup === product.regionGroup) score += 2
      if (Math.abs(candidate.abv - product.abv) <= 5) score += 3
      if (Math.abs(candidate.price - product.price) <= 10000) score += 1
      score += product.tasteTags.filter((tag) => candidate.tasteTags.includes(tag)).length * 2
      score -= tasteDistance(product, candidate) * 0.4
      return { candidate, score }
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map((entry) => entry.candidate)
}
