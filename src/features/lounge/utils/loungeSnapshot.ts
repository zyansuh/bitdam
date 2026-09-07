import { HANSAN_BARS, ANDONG_BARS, ALL_SPLIT, HANSAN_SPLIT, ANDONG_SPLIT, LOUNGE_ORDERS } from '../data/loungeRecords'
import { SELLER_SHOPS } from '../data/sellerShops'
import type { LoungeKpi, LoungeMonthBar, LoungeSplitSlice } from '../types/lounge'
import { inSellerScope } from './inSellerScope'

export function sellerIdsForScope(scopeId: string): string[] {
  if (scopeId === 'all') return SELLER_SHOPS.map((shop) => shop.id)
  return scopeId ? [scopeId] : []
}

function scaleBars(factor: number): LoungeMonthBar[] {
  return HANSAN_BARS.map((row) => ({
    month: row.month,
    amount: Math.max(400_000, Math.round(row.amount * factor)),
  }))
}

export function barsForScope(scopeId: string): LoungeMonthBar[] {
  if (scopeId === 'hansan') return HANSAN_BARS
  if (scopeId === 'andong') return ANDONG_BARS
  if (scopeId === 'all') {
    return HANSAN_BARS.map((row, index) => ({
      month: row.month,
      amount: row.amount + ANDONG_BARS[index].amount,
    }))
  }
  const index = Math.max(0, SELLER_SHOPS.findIndex((shop) => shop.id === scopeId))
  return scaleBars(0.28 + (index % 7) * 0.08)
}

export function splitForScope(scopeId: string): LoungeSplitSlice[] {
  if (scopeId === 'hansan') return HANSAN_SPLIT
  if (scopeId === 'andong') return ANDONG_SPLIT
  return ALL_SPLIT
}

export function kpisForScope(scopeId: string): LoungeKpi[] {
  const ids = sellerIdsForScope(scopeId)
  const orders = inSellerScope(LOUNGE_ORDERS, ids)
  const bars = barsForScope(scopeId)
  const monthSales = bars[9]?.amount ?? bars[bars.length - 1]?.amount ?? 0
  const fresh = orders.filter((row) => row.status === '신규 주문').length
  const stock = scopeId === 'all' ? 500 : 80 + (ids[0]?.length ?? 4) * 12
  const license = scopeId === 'andong' ? 54 : 127

  return [
    {
      id: 'sales',
      label: '이번 달 총매출',
      value: `₩${monthSales.toLocaleString('ko-KR')}`,
      note: '+14.5% 증가',
    },
    {
      id: 'orders',
      label: '신규 접수 주문',
      value: `${Math.max(orders.length, scopeId === 'all' ? orders.length : 3)}건`,
      note: `${fresh}건 미처리`,
      warn: fresh > 0,
    },
    {
      id: 'stock',
      label: '창고 안전재고',
      value: `${stock}병`,
      note: '본인 공방 재고만 표시',
      warn: stock < 120,
    },
    {
      id: 'license',
      label: '통신판매업 면허 갱신',
      value: `D-${license}`,
      note: '서류 안전하게 보관 중',
    },
  ]
}
