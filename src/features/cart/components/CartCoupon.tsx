import type { WalletCoupon } from '../../../shared/types/coupon'

interface CartCouponProps {
  coupons: WalletCoupon[]
  selectedId: string
  onSelect: (id: string) => void
  reason?: string
}

export default function CartCoupon({ coupons, selectedId, onSelect, reason }: CartCouponProps) {
  return (
    <div className="cart-coupon">
      <label className="cart-coupon__label">
        쿠폰
        <select value={selectedId} onChange={(event) => onSelect(event.target.value)}>
          <option value="">적용 안 함</option>
          {coupons.map((coupon) => (
            <option key={coupon.id} value={coupon.id}>
              {coupon.name} ({coupon.code})
            </option>
          ))}
        </select>
      </label>
      {reason ? <p className="cart-coupon__reason">{reason}</p> : null}
      {coupons.length === 0 ? (
        <p className="cart-coupon__reason">사용 가능한 쿠폰이 없습니다. 마이페이지에서 확인하세요.</p>
      ) : null}
    </div>
  )
}
