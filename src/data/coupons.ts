import type { Coupon } from '../shared/types/coupon'

export const COUPON_CATALOG: Omit<Coupon, 'id' | 'status'>[] = [
  {
    code: 'FIRST',
    title: '첫 구매 회원 할인',
    benefitLabel: '15%',
    condition: '첫 결제 시 전통주 전 품목 15% 할인 (최대 2만 원)',
    expiresLabel: '2026.12.31까지',
    kind: 'percent',
    value: 15,
  },
  {
    code: 'WELCOME',
    title: '전통주 구독 쿠폰',
    benefitLabel: '5,000원',
    condition: '3만 원 이상 결제 시 5,000원 즉시 할인',
    expiresLabel: '2026.12.31까지',
    kind: 'amount',
    value: 5000,
  },
  {
    code: 'FREESHIP',
    title: '추석 특별 무료배송',
    benefitLabel: '무료배송',
    condition: '전통주 전 품목 배송비 면제',
    expiresLabel: '2026.10.31까지',
    kind: 'shipping',
    value: 0,
  },
  {
    code: 'BITDAM',
    title: '빚담 감사 쿠폰',
    benefitLabel: '5,000원',
    condition: '전 품목 5,000원 즉시 할인',
    expiresLabel: '2026.12.31까지',
    kind: 'amount',
    value: 5000,
  },
]

export const COUPON_WALLET_SEED: Coupon[] = [
  { id: 'c-first', status: 'available', ...COUPON_CATALOG[0] },
  { id: 'c-welcome', status: 'available', ...COUPON_CATALOG[1] },
  { id: 'c-ship', status: 'available', ...COUPON_CATALOG[2] },
  {
    id: 'c-used-1',
    code: 'USED01',
    title: '봄맞이 막걸리 할인',
    benefitLabel: '3,000원',
    condition: '막걸리 카테고리 결제 시 적용됨',
    expiresLabel: '2026.03.31까지',
    kind: 'amount',
    value: 3000,
    status: 'used',
  },
  {
    id: 'c-used-2',
    code: 'USED02',
    title: '양조장 투어 동반 할인',
    benefitLabel: '10%',
    condition: '투어 예약과 함께 사용됨',
    expiresLabel: '2026.04.30까지',
    kind: 'percent',
    value: 10,
    status: 'used',
  },
  {
    id: 'c-exp-1',
    code: 'OLD01',
    title: '설 명절 쿠폰',
    benefitLabel: '10,000원',
    condition: '기간이 지나 사용할 수 없습니다',
    expiresLabel: '2026.02.28까지',
    kind: 'amount',
    value: 10000,
    status: 'expired',
  },
  {
    id: 'c-exp-2',
    code: 'OLD02',
    title: '신규 가입 배송 쿠폰',
    benefitLabel: '무료배송',
    condition: '기간이 지나 사용할 수 없습니다',
    expiresLabel: '2026.01.31까지',
    kind: 'shipping',
    value: 0,
    status: 'expired',
  },
]

export function findCatalogCoupon(code: string) {
  const normalized = code.trim().toUpperCase()
  return COUPON_CATALOG.find((item) => item.code === normalized) ?? null
}
