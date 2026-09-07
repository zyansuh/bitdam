import { allProducts } from '../../../data/products'
import { GIFT_WRAPS } from '../data/giftOptions'
import type { GiftDraft } from '../types/gift'

export function getGiftProduct(productId: number | null) {
  if (productId == null) return undefined
  return allProducts.find((item) => item.id === productId)
}

export function buildGiftTotal(draft: GiftDraft): number {
  const product = getGiftProduct(draft.productId)
  const wrap = GIFT_WRAPS.find((item) => item.id === draft.wrapId)
  if (!product) return 0
  return product.price * draft.qty + (wrap?.extra ?? 0)
}
