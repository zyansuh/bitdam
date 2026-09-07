export type GiftOccasion = 'all' | 'hyo' | 'biz' | 'couple' | 'friend'

export type GiftPriceBand = 'under30' | 'mid' | 'high' | 'vip'

export type GiftCompose = 'spirit' | 'takju' | 'package' | 'glass'

export type GiftRecipient = 'family' | 'partner' | 'friend' | 'teacher'

export interface HolidayGiftSet {
  id: string
  name: string
  price: number
  image: string
  occasion: GiftOccasion
  priceBand: GiftPriceBand
  compose: GiftCompose
  recipient: GiftRecipient
}
