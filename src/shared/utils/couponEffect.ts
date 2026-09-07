import type { CouponEffect, WalletCoupon } from '../types/coupon'

export function isCouponExpired(coupon: WalletCoupon, now = new Date()): boolean {
  const stamp = coupon.expire.replace(/\./g, '-').slice(0, 10)
  const end = new Date(`${stamp}T23:59:59`)
  return Number.isNaN(end.getTime()) || end.getTime() < now.getTime()
}

export function couponEffect(coupon: WalletCoupon | undefined, itemsAmount: number): CouponEffect {
  if (!coupon) return { discount: 0, freeShipping: false }
  if (coupon.usedAt) return { discount: 0, freeShipping: false, reason: '이미 사용한 쿠폰입니다.' }
  if (isCouponExpired(coupon)) return { discount: 0, freeShipping: false, reason: '유효기간이 지난 쿠폰입니다.' }
  if (itemsAmount < coupon.minAmount) {
    return { discount: 0, freeShipping: false, reason: `${coupon.minAmount.toLocaleString()}원 이상부터 쓸 수 있습니다.` }
  }
  if (coupon.kind === 'freeship') return { discount: 0, freeShipping: true }
  if (coupon.kind === 'percent') {
    return { discount: Math.floor((itemsAmount * coupon.value) / 100), freeShipping: false }
  }
  return { discount: Math.min(coupon.value, itemsAmount), freeShipping: false }
}
