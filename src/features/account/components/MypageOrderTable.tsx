import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import { useMypageOrders } from '../hooks/useMypageOrders'

interface MypageOrderTableProps {
  compact?: boolean
}

export default function MypageOrderTable({ compact = false }: MypageOrderTableProps) {
  const all = useMypageOrders()
  const rows = compact ? all.slice(0, 2) : all

  return (
    <div className="mypage-table-wrap">
      <table className="mypage-table">
        <thead>
          <tr>
            <th>주문일 / 번호</th>
            <th>상품명</th>
            <th>결제 금액</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((order) => (
            <tr key={order.id}>
              <td>
                <p>{order.date}</p>
                <p className="mypage-table__sub">
                  <Link to={`/mypage/orders/${order.id}`}>{order.id}</Link>
                </p>
              </td>
              <td>{order.name}</td>
              <td>{formatWon(order.amount)}</td>
              <td>
                <span className="mypage-status">{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
