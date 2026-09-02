import { Link } from 'react-router-dom'

interface CartCouponProps {
  code: string
  message: string
  onCodeChange: (value: string) => void
  onApply: () => void
}

export default function CartCoupon({ code, message, onCodeChange, onApply }: CartCouponProps) {
  return (
    <div className="cart-coupon">
      <input
        type="text"
        value={code}
        onChange={(event) => onCodeChange(event.target.value)}
        placeholder="쿠폰 코드를 입력하세요"
        className="cart-coupon__input"
      />
      <button type="button" className="cart-coupon__apply" onClick={onApply}>
        적용
      </button>
      <Link to="/coupons" className="cart-coupon__wallet">
        내 쿠폰함
      </Link>
      {message ? <p className="cart-coupon__message">{message}</p> : null}
    </div>
  )
}
