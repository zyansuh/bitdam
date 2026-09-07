import { useCart } from '../../../shared/hooks/useCart'
import { useAuth } from '../../../shared/hooks/useAuth'
import { calcCartTotals } from '../../../shared/utils/cartTotals'
import { couponEffect } from '../../../shared/utils/couponEffect'
import { markCouponUsed } from '../../../shared/utils/couponStorage'
import { consumeCatalogStock, isSoldOut } from '../../../data/products'
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
  const stockIssue = items.find((item) => isSoldOut(item.product) || item.quantity > (item.product.stock ?? 0))
  const stockReason = stockIssue
    ? `${stockIssue.product.name}은(는) 재고가 부족합니다.`
    : undefined

  function checkout(payment: string): ShopOrder | undefined {
    if (!user || items.length === 0) return undefined
    if (coupon && applied.reason) return undefined
    if (stockReason) return undefined
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
    consumeCatalogStock(order.lines.map((line) => ({ productId: line.productId, quantity: line.quantity })))
    if (coupon) markCouponUsed(coupon.id, order.id)
    clearCart()
    return order
  }

  return { totals, checkout, couponReason: applied.reason, stockReason }
}
