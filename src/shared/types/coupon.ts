export type CouponStatus = 'available' | 'used' | 'expired'
export type CouponKind = 'percent' | 'amount' | 'shipping'

export interface Coupon {
  id: string
  code: string
  title: string
  benefitLabel: string
  condition: string
  expiresLabel: string
  kind: CouponKind
  value: number
  status: CouponStatus
}
