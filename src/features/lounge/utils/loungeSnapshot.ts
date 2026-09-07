import type { LoungeKpi, LoungeMonthBar, LoungeSplitSlice } from '../types/lounge'
import {
  ANDONG_BARS,
  ANDONG_SPLIT,
  ALL_SPLIT,
  HANSAN_BARS,
  HANSAN_SPLIT,
  LOUNGE_ORDERS,
} from '../data/loungeRecords'
import { SELLER_SHOPS } from '../data/sellerShops'
import { inSellerScope } from './inSellerScope'

export function sellerIdsForScope(scopeId: string): string[] {
  if (scopeId === 'all') return SELLER_SHOPS.map((shop) => shop.id)
  return scopeId ? [scopeId] : []
}

export function barsForScope(scopeId: string): LoungeMonthBar[] {
  if (scopeId === 'hansan') return HANSAN_BARS
  if (scopeId === 'andong') return ANDONG_BARS
  return HANSAN_BARS.map((row, index) => ({
    month: row.month,
    amount: row.amount + ANDONG_BARS[index].amount,
  }))
}

export function splitForScope(scopeId: string): LoungeSplitSlice[] {
  if (scopeId === 'hansan') return HANSAN_SPLIT
  if (scopeId === 'andong') return ANDONG_SPLIT
  return ALL_SPLIT
}

export function kpisForScope(scopeId: string): LoungeKpi[] {
  const ids = sellerIdsForScope(scopeId)
  const orders = inSellerScope(LOUNGE_ORDERS, ids)
  const fresh = orders.filter((row) => row.status === '신규 주문').length
  const stock = scopeId === 'andong' ? 180 : scopeId === 'hansan' ? 320 : 500
  const short = scopeId === 'andong' ? 12 : 45
  const license = scopeId === 'andong' ? 54 : 127

  return [
    {
      id: 'sales',
      label: '이번 달 총매출',
      value: `₩${(scopeId === 'all' ? 20_150_000 : scopeId === 'andong' ? 7_700_000 : 12_450_000).toLocaleString('ko-KR')}`,
      note: '+14.5% 증가',
    },
    {
      id: 'orders',
      label: '신규 접수 주문',
      value: `${orders.length}건`,
      note: `${fresh}건 미처리`,
      warn: fresh > 0,
    },
    {
      id: 'stock',
      label: '창고 안전재고',
      value: `${stock}병`,
      note: `소곡주 ${short}병 부족`,
      warn: true,
    },
    {
      id: 'license',
      label: '통신판매업 면허 갱신',
      value: `D-${license}`,
      note: '서류 안전하게 보관 중',
    },
  ]
}
