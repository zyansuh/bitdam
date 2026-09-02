interface CouponRegisterBarProps {
  code: string
  message: string
  onCodeChange: (value: string) => void
  onRegister: () => void
}

export default function CouponRegisterBar({
  code,
  message,
  onCodeChange,
  onRegister,
}: CouponRegisterBarProps) {
  return (
    <div className="coupon-register">
      <input
        type="text"
        value={code}
        onChange={(event) => onCodeChange(event.target.value)}
        placeholder="쿠폰 코드를 입력하세요"
        className="coupon-register__input"
      />
      <button type="button" className="coupon-register__btn" onClick={onRegister}>
        등록하기
      </button>
      {message ? <p className="coupon-register__message">{message}</p> : null}
    </div>
  )
}
