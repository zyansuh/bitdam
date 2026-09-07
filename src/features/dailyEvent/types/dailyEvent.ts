export interface DailyCoupon {
  amount: number
  issuedAt: string
  expiresAt: string
}

export interface LuckyBagState {
  stamps: number
  lastOpen: string
  lastShare: string
  coupon: DailyCoupon | null
}

export interface PremiumGiftAd {
  id: string
  name: string
  price: number
  perk: string
  image: string
}
