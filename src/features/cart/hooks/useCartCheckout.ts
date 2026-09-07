import { useCart } from '../../../shared/hooks/useCart'
import { useAuth } from '../../../shared/hooks/useAuth'
import { calcCartTotals } from '../../../shared/utils/cartTotals'
import { appendShopOrder, createShopOrderId } from '../../../shared/utils/shopOrderStorage'
import type { ShopOrder } from '../../../shared/types/shopOrder'
import type { CartItem } from '../../../shared/providers/cartProvider'

export function useCartCheckout() {
  const { items, clearCart } = useCart()
  const { user } = useAuth()

  const itemsAmount = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const totals = calcCartTotals(itemsAmount, 0, false)

  function checkout(payment: string): ShopOrder | undefined {
    if (!user || items.length === 0) return undefined
    const order: ShopOrder = {
      id: createShopOrderId(),
      createdAt: new Date().toISOString(),
      buyerId: user.id,
      buyerName: user.nickname,
      address: '마이페이지 기본 배송지',
      phone: user.phone ?? '010-0000-0000',
      payment,
      amount: totals.payAmount,
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
    clearCart()
    return order
  }

  return { totals, checkout }
}
