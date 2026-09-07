import { Link } from 'react-router-dom'

interface OrderCompleteActionsProps {
  orderId: string
}

export default function OrderCompleteActions({ orderId }: OrderCompleteActionsProps) {
  return (
    <div className="order-complete__actions">
      <Link to="/products" className="order-complete__ghost">
        쇼핑 계속하기
      </Link>
      <Link to={`/mypage/orders/${orderId}`} className="order-complete__solid">
        주문 상세 조회하기
      </Link>
    </div>
  )
}
