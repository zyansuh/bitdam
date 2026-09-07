import { useEffect, useState } from 'react'
import type { ProductReview } from '../types/review'
import { readReviewsByProduct } from '../utils/reviewStorage'

export function useProductReviews(productId: number) {
  const [reviews, setReviews] = useState<ProductReview[]>(() => readReviewsByProduct(productId))

  useEffect(() => {
    setReviews(readReviewsByProduct(productId))
  }, [productId])

  return reviews
}
