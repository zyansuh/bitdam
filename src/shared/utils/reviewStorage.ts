import type { ProductReview } from '../types/review'

const STORAGE_KEY = 'bitdam.reviews'

export function readReviews(): ProductReview[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw) as ProductReview[]
    return parsed.filter((review) => Number.isInteger(review.productId) && review.body)
  } catch {
    return []
  }
}

export function writeReviews(reviews: ProductReview[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
}

export function appendReview(review: ProductReview): void {
  writeReviews([review, ...readReviews()])
}

export function readReviewsByProduct(productId: number): ProductReview[] {
  return readReviews().filter((review) => review.productId === productId)
}
