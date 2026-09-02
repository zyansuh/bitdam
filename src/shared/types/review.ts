export type ReviewAttributeKey = 'taste' | 'aroma' | 'swallow' | 'value'

export interface ReviewAttributeScores {
  taste: number
  aroma: number
  swallow: number
  value: number
}

export interface ProductReview {
  id: string
  productId: number
  recommend: number
  attributes: ReviewAttributeScores
  tags: string[]
  body: string
  photos: string[]
  createdAt: string
}
