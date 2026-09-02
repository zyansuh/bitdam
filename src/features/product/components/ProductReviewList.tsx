import { Link } from 'react-router-dom'
import type { ProductReview } from '../../../shared/types/review'

interface ProductReviewListProps {
  productId: number
  catalogCount: number
  reviews: ProductReview[]
}

export default function ProductReviewList({ productId, catalogCount, reviews }: ProductReviewListProps) {
  const total = catalogCount + reviews.length

  return (
    <div>
      <p className="pdp-reviews__meta">등록된 후기 {total}건 (이 브라우저 {reviews.length}건)</p>
      {reviews.length === 0 ? (
        <p className="pdp-reviews__body">아직 작성된 브라우저 후기가 없습니다.</p>
      ) : (
        <ul className="pdp-reviews">
          {reviews.map((review) => (
            <li key={review.id} className="pdp-reviews__item">
              <p className="pdp-reviews__meta">추천 {review.recommend}점 · {review.tags.join(', ')}</p>
              <p className="pdp-reviews__body">{review.body}</p>
            </li>
          ))}
        </ul>
      )}
      <Link to={`/products/${productId}/review`} className="pdp-reviews__write">
        구매 후기 작성
      </Link>
    </div>
  )
}
