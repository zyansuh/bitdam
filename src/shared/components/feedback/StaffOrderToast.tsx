import type { ShopOrder } from '../../types/shopOrder'

interface StaffOrderToastProps {
  order: ShopOrder
  onOpen: () => void
  onDismiss: () => void
}

export default function StaffOrderToast({ order, onOpen, onDismiss }: StaffOrderToastProps) {
  const product = order.lines[0]?.name ?? '상품'

  return (
    <article className="order-toast">
      <button type="button" className="order-toast__body" onClick={onOpen}>
        <p className="order-toast__kicker">새로운 주문이 들어왔습니다.</p>
        <p>주문번호: {order.id}</p>
        <p>상품: {product}</p>
      </button>
      <button type="button" className="order-toast__close" onClick={onDismiss} aria-label="알림 닫기">
        ×
      </button>
    </article>
  )
}
