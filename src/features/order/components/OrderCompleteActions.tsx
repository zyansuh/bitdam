import { Link } from 'react-router-dom'

export default function OrderCompleteActions() {
  return (
    <div className="order-complete__actions">
      <Link to="/products" className="order-complete__ghost">
        쇼핑 계속하기
      </Link>
      <a href="#shipping" className="order-complete__solid">
        주문 상세 조회하기
      </a>
    </div>
  )
}
