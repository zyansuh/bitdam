import { useState } from 'react'
import { formatWon } from '../../../shared/utils/formatWon'
import type { LoungeOrder } from '../types/lounge'
import LoungeOrderDetailModal from './LoungeOrderDetailModal'

interface LoungeOrderTableProps {
  rows: LoungeOrder[]
}

export default function LoungeOrderTable({ rows }: LoungeOrderTableProps) {
  const [open, setOpen] = useState<LoungeOrder | null>(null)

  return (
    <section className="lounge-panel">
      <h2>오늘 접수된 실시간 신규 주문</h2>
      <div className="lounge-table-wrap">
        <table className="lounge-table">
          <thead>
            <tr>
              <th>시간</th>
              <th>주문번호</th>
              <th>상품명</th>
              <th>구매자</th>
              <th>금액</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.time}</td>
                <td>
                  <button type="button" className="lounge-order-link" onClick={() => setOpen(row)}>
                    {row.shopOrderId ?? row.id}
                  </button>
                </td>
                <td>
                  <button type="button" className="lounge-order-link" onClick={() => setOpen(row)}>
                    {row.product}
                  </button>
                </td>
                <td>{row.buyer}</td>
                <td>{formatWon(row.amount)}</td>
                <td>
                  <span className={`lounge-badge lounge-badge--${row.status === '신규 주문' ? 'new' : 'pay'}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LoungeOrderDetailModal row={open} onClose={() => setOpen(null)} />
    </section>
  )
}
