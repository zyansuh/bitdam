import type { ShopOrder } from '../../../shared/types/shopOrder'
import type { LoungeOrder } from '../types/lounge'

export function shopOrderToLoungeRow(order: ShopOrder): LoungeOrder {
  const first = order.lines[0]
  const extra = order.lines.length > 1 ? ` 외 ${order.lines.length - 1}종` : ''
  return {
    id: order.id,
    shopOrderId: order.id,
    sellerId: first?.sellerId ?? '',
    time: new Date(order.createdAt).toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    product: `${first?.name ?? '상품'}${extra}`,
    buyer: order.buyerName,
    amount: order.amount,
    status: order.status === '배송 완료' ? '배송 중' : order.status === '출고 준비' || order.status === '배송 중' ? order.status : '결제 확인',
  }
}
