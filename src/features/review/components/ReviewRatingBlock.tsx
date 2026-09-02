import { REVIEW_ATTRIBUTES } from '../data/reviewOptions'
import type { ReviewAttributeScores } from '../../../shared/types/review'
import type { ReviewAttributeKey } from '../../../shared/types/review'
import StarScore from './StarScore'

const RECOMMEND_COPY: Record<number, string> = {
  1: '아쉬워요',
  2: '그저 그래요',
  3: '괜찮아요',
  4: '좋아요',
  5: '최고예요! 아주 만족합니다.',
}

interface ReviewRatingBlockProps {
  recommend: number
  onRecommend: (value: number) => void
  attributes: ReviewAttributeScores
  onAttribute: (key: ReviewAttributeKey, score: number) => void
}

export default function ReviewRatingBlock({
  recommend,
  onRecommend,
  attributes,
  onAttribute,
}: ReviewRatingBlockProps) {
  return (
    <section className="review-rating">
      <div className="review-rating__recommend">
        <h2 className="review-section__title">이 상품을 추천하시겠습니까?</h2>
        <StarScore value={recommend} onChange={onRecommend} size={36} label="추천 별점" />
        <p className="review-rating__copy">{RECOMMEND_COPY[recommend] ?? ''}</p>
      </div>
      <div>
        <h2 className="review-section__title">상세 속성 평가</h2>
        <ul className="review-attrs">
          {REVIEW_ATTRIBUTES.map((item) => (
            <li key={item.key} className="review-attrs__row">
              <p className="review-attrs__label">
                {item.label} <span>({item.hint})</span>
              </p>
              <StarScore
                value={attributes[item.key]}
                onChange={(score) => onAttribute(item.key, score)}
                size={18}
                label={item.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
