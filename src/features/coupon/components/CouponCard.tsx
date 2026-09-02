import { Link } from 'react-router-dom'
import type { Coupon } from '../../../shared/types/coupon'

interface CouponCardProps {
  coupon: Coupon
}

export default function CouponCard({ coupon }: CouponCardProps) {
  const canUse = coupon.status === 'available'

  return (
    <article className={canUse ? 'coupon-card' : 'coupon-card coupon-card--dim'}>
      <p className="coupon-card__benefit">{coupon.benefitLabel}</p>
      <div className="coupon-card__body">
        <h2 className="coupon-card__title">{coupon.title}</h2>
        <p className="coupon-card__meta">{coupon.condition}</p>
        <p className="coupon-card__meta">{coupon.expiresLabel}</p>
      </div>
      {canUse ? (
        <Link to={`/cart?coupon=${coupon.code}`} className="coupon-card__use">
          사용하기
        </Link>
      ) : (
        <span className="coupon-card__badge">
          {coupon.status === 'used' ? '사용완료' : '기간만료'}
        </span>
      )}
    </article>
  )
}
