import { formatWon } from '../../../shared/utils/formatWon'
import type { LoungeSettlement } from '../types/lounge'

interface LoungeSettlementTableProps {
  rows: LoungeSettlement[]
}

export default function LoungeSettlementTable({ rows }: LoungeSettlementTableProps) {
  return (
    <div className="lounge-table-wrap">
      <table className="lounge-table">
        <thead>
          <tr>
            <th>정산일자</th>
            <th>주문번호</th>
            <th>상품명</th>
            <th>결제금액</th>
            <th>수수료</th>
            <th>정산예정액</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.orderId}</td>
              <td>{row.product}</td>
              <td>{formatWon(row.paid)}</td>
              <td>{formatWon(row.fee)}</td>
              <td>{formatWon(row.due)}</td>
              <td>
                <span className={`lounge-badge lounge-badge--${row.status === '정산완료' ? 'done' : 'wait'}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
