export const CART_SHIPPING_FEE = 3500
export const CART_FREE_SHIPPING_MIN = 70000

export interface CartTotals {
  itemsAmount: number
  shippingFee: number
  discount: number
  payAmount: number
}

export function calcCartTotals(
  itemsAmount: number,
  discount: number,
  freeShipping = false,
): CartTotals {
  const shippingFee =
    itemsAmount === 0 || freeShipping || itemsAmount >= CART_FREE_SHIPPING_MIN ? 0 : CART_SHIPPING_FEE
  const safeDiscount = Math.min(discount, itemsAmount)
  const payAmount = Math.max(0, itemsAmount - safeDiscount + shippingFee)

  return {
    itemsAmount,
    shippingFee,
    discount: safeDiscount,
    payAmount,
  }
}
