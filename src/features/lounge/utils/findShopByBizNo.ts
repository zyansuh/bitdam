import { SELLER_SHOPS } from '../data/sellerShops'
import type { SellerShop } from '../types/lounge'
import { bizNoDigits } from './normalizeBizNo'

export function findShopByBizNo(bizNo: string): SellerShop | undefined {
  const digits = bizNoDigits(bizNo)
  if (digits.length !== 10) return undefined
  return SELLER_SHOPS.find((shop) => bizNoDigits(shop.bizNo) === digits)
}
