import { useMemo, useState } from 'react'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import { formatWon } from '../../../shared/utils/formatWon'
import type { LoungeOrder } from '../types/lounge'
import { filterLoungeOrders } from '../utils/filterLoungeOrders'
import LoungeOrderDetailModal from './LoungeOrderDetailModal'

const STATUS_FILTERS: Array<LoungeOrder['status'] | 'all'> = [
  'all',
  '신규 주문',
  '결제 확인',
  '출고 준비',
  '배송 중',
]

interface LoungeOrderTableProps {
  rows: LoungeOrder[]
}

export default function LoungeOrderTable({ rows }: LoungeOrderTableProps) {
  const [open, setOpen] = useState<LoungeOrder | null>(null)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<LoungeOrder['status'] | 'all'>('all')
  const visible = useMemo(() => filterLoungeOrders(rows, query, status), [rows, query, status])

  return (
    <section className="lounge-panel">
      <h2>오늘 접수된 실시간 신규 주문</h2>
      <div className="lounge-order-filters">
        <label>
          검색
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="주문번호 · 상품 · 구매자"
          />
        </label>
        <label>
          상태
          <select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}>
            {STATUS_FILTERS.map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? '전체' : item}
              </option>
            ))}
          </select>
        </label>
      </div>
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
            {visible.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <EmptyState title="주문이 없습니다" body="검색어나 상태 필터를 바꿔 보세요." />
                </td>
              </tr>
            ) : (
            visible.map((row) => (
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
            ))
            )}
          </tbody>
        </table>
      </div>
      <LoungeOrderDetailModal row={open} onClose={() => setOpen(null)} />
    </section>
  )
}
