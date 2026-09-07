export type CouponKind = 'percent' | 'amount' | 'freeship'

export interface WalletCoupon {
  id: string
  userId: string
  code: string
  name: string
  kind: CouponKind
  value: number
  minAmount: number
  expire: string
  usedAt?: string
  orderId?: string
}

export interface CouponEffect {
  discount: number
  freeShipping: boolean
  reason?: string
}
