import { useRef } from 'react'
import { useFocusTrap } from '../../../shared/hooks/useFocusTrap'
import { formatWon } from '../../../shared/utils/formatWon'
import { getShopOrder } from '../../../shared/utils/shopOrderStorage'
import type { LoungeOrder } from '../types/lounge'

interface LoungeOrderDetailModalProps {
  row: LoungeOrder | null
  onClose: () => void
}

export default function LoungeOrderDetailModal({ row, onClose }: LoungeOrderDetailModalProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  useFocusTrap(Boolean(row), rootRef)
  const order = getShopOrder(row?.shopOrderId)

  if (!row) {
    return null
  }

  return (
    <div
      ref={rootRef}
      className="lounge-order-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lounge-order-title"
    >
      <button type="button" className="lounge-order-modal__backdrop" aria-label="닫기" onClick={onClose} />
      <div className="lounge-order-modal__panel">
        <h2 id="lounge-order-title">주문 상세 {order?.id ?? row.shopOrderId ?? row.id}</h2>
        <section>
          <h3>주문</h3>
          <p>상태 {order?.status ?? row.status}</p>
          <p>주문 시각 {order ? new Date(order.createdAt).toLocaleString('ko-KR') : row.time}</p>
        </section>
        <section>
          <h3>상품</h3>
          {order ? (
            <ul>
              {order.lines.map((line) => (
                <li key={`${line.productId}-${line.name}`}>
                  {line.name} ×{line.quantity} · {formatWon(line.price * line.quantity)}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {row.product} · {formatWon(row.amount)}
            </p>
          )}
        </section>
        <section>
          <h3>주문자 · 수령</h3>
          <p>주문자 {order?.buyerName ?? row.buyer}</p>
          {order ? (
            <>
              <p>연락처 {order.phone}</p>
              <p>배송지 {order.address}</p>
            </>
          ) : (
            <p>목업 주문은 배송 연락처가 없습니다. 결제된 ShopOrder만 주소가 붙습니다.</p>
          )}
        </section>
        <section>
          <h3>결제</h3>
          <p>{order?.payment ?? '—'}</p>
          <p>결제금액 {formatWon(order?.amount ?? row.amount)}</p>
          {order?.couponTitle ? (
            <p>
              쿠폰 {order.couponTitle} (−{formatWon(order.discount ?? 0)})
            </p>
          ) : null}
        </section>
        <button type="button" className="lounge-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  )
}
