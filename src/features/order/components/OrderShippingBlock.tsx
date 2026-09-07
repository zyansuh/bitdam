import type { ShopOrder } from '../../../shared/types/shopOrder'
import { formatWon } from '../../../shared/utils/formatWon'

interface OrderShippingBlockProps {
  order: ShopOrder
}

export default function OrderShippingBlock({ order }: OrderShippingBlockProps) {
  return (
    <section id="shipping" className="order-ship">
      <h2 className="order-ship__title">배송지 · 결제</h2>
      <dl className="order-ship__rows">
        <div>
          <dt>주문 번호</dt>
          <dd>{order.id}</dd>
        </div>
        <div>
          <dt>받는 사람</dt>
          <dd>
            {order.buyerName} · {order.phone}
          </dd>
        </div>
        <div>
          <dt>주소</dt>
          <dd>{order.address}</dd>
        </div>
        <div>
          <dt>결제</dt>
          <dd>
            {order.payment} · {formatWon(order.amount)}
          </dd>
        </div>
        <div>
          <dt>상품</dt>
          <dd>{order.lines.map((line) => `${line.name} ×${line.quantity}`).join(', ')}</dd>
        </div>
        <div>
          <dt>상태</dt>
          <dd>{order.status}</dd>
        </div>
      </dl>
    </section>
  )
}
