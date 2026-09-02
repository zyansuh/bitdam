import type { Coupon } from '../types/coupon'

export function couponEffect(coupon: Coupon, itemsAmount: number) {
  if (coupon.kind === 'shipping') {
    return { discount: 0, freeShipping: true }
  }
  if (coupon.kind === 'percent') {
    const raw = Math.floor((itemsAmount * coupon.value) / 100)
    return { discount: Math.min(raw, 20000), freeShipping: false }
  }
  return { discount: coupon.value, freeShipping: false }
}
