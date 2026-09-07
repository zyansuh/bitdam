import { describe, expect, it } from 'vitest'
import type { LoungeOrder } from '../types/lounge'
import { filterLoungeOrders } from './filterLoungeOrders'

const rows: LoungeOrder[] = [
  {
    id: 'BD-20260908-001',
    shopOrderId: 'BD-20260908-001',
    sellerId: 'hansan',
    time: '10:00',
    product: '한산 소곡주',
    buyer: '김서연',
    amount: 42000,
    status: '결제 확인',
  },
  {
    id: 'BD-20260908-002',
    shopOrderId: 'BD-20260908-002',
    sellerId: 'andong',
    time: '11:00',
    product: '안동소주',
    buyer: '박준호',
    amount: 15000,
    status: '출고 준비',
  },
]

describe('filterLoungeOrders', () => {
  it('filters by product query', () => {
    expect(filterLoungeOrders(rows, '소곡', 'all')).toHaveLength(1)
  })

  it('filters by status', () => {
    expect(filterLoungeOrders(rows, '', '출고 준비')).toHaveLength(1)
  })
})
