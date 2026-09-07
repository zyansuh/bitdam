import { readShopOrders } from '../../../shared/utils/shopOrderStorage'
import type { LoungeSettlement } from '../types/lounge'
import { SETTLEMENT_FEE_RATE } from '../data/settlementFee'

export function shopOrdersToSettlements(): LoungeSettlement[] {
  return readShopOrders().flatMap((order) => {
    const date = new Date(order.createdAt)
    const stamp = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
    const settled = order.status === '배송 완료'
    return order.lines.map((line, index) => {
      const paid = line.price * line.quantity
      const fee = Math.round(paid * SETTLEMENT_FEE_RATE)
      return {
        id: `${order.id}-${index}`,
        sellerId: line.sellerId,
        date: stamp,
        orderId: order.id,
        product: line.quantity > 1 ? `${line.name} ×${line.quantity}` : line.name,
        paid,
        fee,
        due: paid - fee,
        status: settled ? '정산완료' : '정산대기',
      }
    })
  })
}
