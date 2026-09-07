import { formatWon } from '../../../shared/utils/formatWon'

interface GiftPayProps {
  total: number
  paid: boolean
  onPay: () => void
  onBack: () => void
}

export default function GiftPay({ total, paid, onPay, onBack }: GiftPayProps) {
  return (
    <section className="gift-panel">
      <header>
        <h1>결제하기</h1>
        <p>받는 분 배송지와 결제 수단을 확인한 뒤 선물을 보냅니다. 실제 결제는 연동 전입니다.</p>
      </header>
      <label className="gift-field">
        받는 분
        <input type="text" defaultValue="김빚담" />
      </label>
      <label className="gift-field">
        배송지
        <input type="text" defaultValue="서울시 종로구 북촌로 12" />
      </label>
      <p className="gift-pay-total">결제 금액 {formatWon(total)}</p>
      {paid ? (
        <p className="gift-done">선물 결제가 접수되었습니다. 받는 분께 카드와 함께 출고됩니다.</p>
      ) : (
        <div className="gift-actions">
          <button type="button" className="shop-ghost-btn" onClick={onBack}>
            메시지 수정
          </button>
          <button type="button" className="shop-gold-btn" onClick={onPay}>
            {formatWon(total)} 결제하기
          </button>
        </div>
      )}
    </section>
  )
}
