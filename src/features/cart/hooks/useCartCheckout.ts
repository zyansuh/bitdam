import { useCart } from '../../../shared/hooks/useCart'
import { useAuth } from '../../../shared/hooks/useAuth'
import { calcCartTotals } from '../../../shared/utils/cartTotals'
import { couponEffect } from '../../../shared/utils/couponEffect'
import { markCouponUsed } from '../../../shared/utils/couponStorage'
import { appendShopOrder, createShopOrderId } from '../../../shared/utils/shopOrderStorage'
import type { ShopOrder } from '../../../shared/types/shopOrder'
import type { WalletCoupon } from '../../../shared/types/coupon'
import type { CartItem } from '../../../shared/providers/cartProvider'

export function useCartCheckout(coupon?: WalletCoupon) {
  const { items, clearCart } = useCart()
  const { user } = useAuth()

  const itemsAmount = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const applied = couponEffect(coupon, itemsAmount)
  const totals = calcCartTotals(itemsAmount, applied.discount, applied.freeShipping)

  function checkout(payment: string): ShopOrder | undefined {
    if (!user || items.length === 0) return undefined
    if (coupon && applied.reason) return undefined
    const order: ShopOrder = {
      id: createShopOrderId(),
      createdAt: new Date().toISOString(),
      buyerId: user.id,
      buyerName: user.nickname,
      address: '마이페이지 기본 배송지',
      phone: user.phone ?? '010-0000-0000',
      payment,
      amount: totals.payAmount,
      discount: totals.discount,
      couponCode: coupon?.code,
      couponTitle: coupon?.name,
      status: '결제 확인',
      lines: items.map((item: CartItem) => ({
        productId: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        sellerId: item.product.sellerId,
      })),
    }
    appendShopOrder(order)
    if (coupon) markCouponUsed(coupon.id, order.id)
    clearCart()
    return order
  }

  return { totals, checkout, couponReason: applied.reason }
}
