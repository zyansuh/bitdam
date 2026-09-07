import type { LoungeOrder } from '../types/lounge'
import { readShopOrders } from '../../../shared/utils/shopOrderStorage'

function loungeStatus(status: string): LoungeOrder['status'] {
  if (status === '배송 완료') return '배송 중'
  if (status === '신규 주문' || status === '결제 확인' || status === '출고 준비' || status === '배송 중') {
    return status
  }
  return '결제 확인'
}

export function shopOrdersToLoungeRows(): LoungeOrder[] {
  return readShopOrders().flatMap((order) => {
    const time = new Date(order.createdAt).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    return order.lines.map((line, index) => ({
        id: `${order.id}-${index}`,
        shopOrderId: order.id,
      sellerId: line.sellerId,
      time,
      product: line.quantity > 1 ? `${line.name} ×${line.quantity}` : line.name,
      buyer: order.buyerName,
      amount: line.price * line.quantity,
      status: loungeStatus(order.status),
    }))
  })
}
