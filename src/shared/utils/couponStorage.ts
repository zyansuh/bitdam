import type { WalletCoupon } from '../types/coupon'

const KEY = 'bitdam.coupons.wallet'

export function catalogCoupons(userId: string): WalletCoupon[] {
  return [
    {
      id: `${userId}-WELCOME`,
      userId,
      code: 'WELCOME',
      name: '첫 구매 10%',
      kind: 'percent',
      value: 10,
      minAmount: 0,
      expire: '2026.12.31',
    },
    {
      id: `${userId}-TOUR5`,
      userId,
      code: 'TOUR5',
      name: '양조장 투어 5천원',
      kind: 'amount',
      value: 5000,
      minAmount: 0,
      expire: '2026.10.31',
    },
    {
      id: `${userId}-SET3`,
      userId,
      code: 'SET3',
      name: '3만원 이상 무료배송',
      kind: 'freeship',
      value: 0,
      minAmount: 30000,
      expire: '2026.11.15',
    },
  ]
}

export function readWalletCoupons(): WalletCoupon[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as WalletCoupon[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeWalletCoupons(coupons: WalletCoupon[]): void {
  localStorage.setItem(KEY, JSON.stringify(coupons))
}

export function couponsForUser(userId: string): WalletCoupon[] {
  const all = readWalletCoupons()
  const mine = all.filter((coupon) => coupon.userId === userId)
  const missing = catalogCoupons(userId).filter((seed) => !mine.some((coupon) => coupon.code === seed.code))
  if (missing.length === 0) return mine
  writeWalletCoupons([...missing, ...all])
  return [...missing, ...mine]
}

export function upsertWalletCoupon(coupon: WalletCoupon): void {
  const all = readWalletCoupons()
  writeWalletCoupons([coupon, ...all.filter((item) => item.id !== coupon.id)])
}

export function markCouponUsed(id: string, orderId: string): void {
  writeWalletCoupons(
    readWalletCoupons().map((coupon) =>
      coupon.id === id ? { ...coupon, usedAt: new Date().toISOString(), orderId } : coupon,
    ),
  )
}
