import type { LastOrder } from '../../../shared/types/order'
import { formatWon } from '../../../shared/utils/formatWon'

interface OrderShippingBlockProps {
  order: LastOrder
}

export default function OrderShippingBlock({ order }: OrderShippingBlockProps) {
  return (
    <section id="shipping" className="order-ship">
      <h2 className="order-ship__title">배송지 정보</h2>
      <dl className="order-ship__rows">
        <div>
          <dt>주문 번호</dt>
          <dd>{order.orderNo}</dd>
        </div>
        <div>
          <dt>받는 사람</dt>
          <dd>
            {order.recipient} · {order.phone}
          </dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>{order.address}</dd>
        </div>
        <div>
          <dt>결제</dt>
          <dd>
            {order.payment} · {formatWon(order.payAmount)}
            {order.couponTitle ? ` · ${order.couponTitle}` : ''}
          </dd>
        </div>
      </dl>
    </section>
  )
}
