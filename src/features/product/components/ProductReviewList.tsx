import type { ProductReview } from '../../../shared/types/review'

interface ProductReviewListProps {
  catalogCount: number
  reviews: ProductReview[]
}

export default function ProductReviewList({ catalogCount, reviews }: ProductReviewListProps) {
  const total = catalogCount + reviews.length

  return (
    <div>
      <p className="pdp-reviews__meta">등록된 후기 {total}건</p>
      {reviews.length === 0 ? (
        <p className="pdp-reviews__body">아직 이 브라우저에서 작성한 후기가 없습니다.</p>
      ) : (
        <ul className="pdp-reviews">
          {reviews.map((review) => (
            <li key={review.id} className="pdp-reviews__item">
              <p className="pdp-reviews__meta">
                추천 {review.recommend}점 · {review.tags.join(', ')}
              </p>
              <p className="pdp-reviews__body">{review.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
