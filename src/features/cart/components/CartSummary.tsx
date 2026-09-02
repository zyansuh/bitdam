import type { CartTotals } from '../../../shared/utils/cartTotals'
import { formatWon } from '../../../shared/utils/formatWon'
import { CART_PAYMENTS } from '../data/cartOptions'

interface CartSummaryProps {
  totals: CartTotals
  payment: string
  onPayment: (method: string) => void
  onCheckout: () => void
  canCheckout: boolean
}

export default function CartSummary({
  totals,
  payment,
  onPayment,
  onCheckout,
  canCheckout,
}: CartSummaryProps) {
  return (
    <aside className="cart-summary">
      <h2 className="cart-summary__title">최종 결제 금액</h2>
      <dl className="cart-summary__rows">
        <div>
          <dt>총 상품금액</dt>
          <dd>{formatWon(totals.itemsAmount)}</dd>
        </div>
        <div>
          <dt>배송비</dt>
          <dd>{totals.shippingFee === 0 ? '무료' : formatWon(totals.shippingFee)}</dd>
        </div>
        <div>
          <dt>쿠폰 할인</dt>
          <dd>{totals.discount > 0 ? `- ${formatWon(totals.discount)}` : formatWon(0)}</dd>
        </div>
      </dl>
      <p className="cart-summary__total">
        <span>최종 결제 예정 금액</span>
        <strong>{formatWon(totals.payAmount)}</strong>
      </p>
      <p className="cart-summary__notice">
        전통주는 관련 법령에 따라 19세 이상만 구매할 수 있습니다. 결제 시 본인인증이 필요할 수
        있습니다.
      </p>
      <div className="cart-summary__pays">
        {CART_PAYMENTS.map((method) => (
          <button
            key={method}
            type="button"
            className={
              payment === method ? 'cart-summary__pay cart-summary__pay--on' : 'cart-summary__pay'
            }
            onClick={() => onPayment(method)}
          >
            {method}
          </button>
        ))}
      </div>
      <button type="button" className="cart-summary__checkout" disabled={!canCheckout} onClick={onCheckout}>
        {formatWon(totals.payAmount)} 결제하기
      </button>
    </aside>
  )
}
