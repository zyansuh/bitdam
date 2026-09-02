import type { CouponStatus } from '../../../shared/types/coupon'

interface CouponStatusTabsProps {
  tab: CouponStatus
  availableCount: number
  usedCount: number
  expiredCount: number
  onChange: (tab: CouponStatus) => void
}

export default function CouponStatusTabs({
  tab,
  availableCount,
  usedCount,
  expiredCount,
  onChange,
}: CouponStatusTabsProps) {
  return (
    <div className="coupon-tabs">
      <button
        type="button"
        className={tab === 'available' ? 'coupon-tabs__item coupon-tabs__item--on' : 'coupon-tabs__item'}
        onClick={() => onChange('available')}
      >
        사용가능 ({availableCount})
      </button>
      <button
        type="button"
        className={tab === 'used' ? 'coupon-tabs__item coupon-tabs__item--on' : 'coupon-tabs__item'}
        onClick={() => onChange('used')}
      >
        사용완료 ({usedCount})
      </button>
      <button
        type="button"
        className={tab === 'expired' ? 'coupon-tabs__item coupon-tabs__item--on' : 'coupon-tabs__item'}
        onClick={() => onChange('expired')}
      >
        기간만료 ({expiredCount})
      </button>
    </div>
  )
}
