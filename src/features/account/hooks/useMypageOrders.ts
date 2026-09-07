import { useMemo } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { readShopOrders } from '../../../shared/utils/shopOrderStorage'
import { mypageOrders } from '../data/mypageMock'

export function useMypageOrders() {
  const { user } = useAuth()
  return useMemo(() => {
    const live = user
      ? readShopOrders()
          .filter((order) => order.buyerId === user.id)
          .map((order) => ({
            id: order.id,
            date: new Date(order.createdAt).toLocaleDateString('ko-KR').replace(/\. /g, '.').replace('.', '.'),
            name: order.lines.map((line) => line.name).join(', '),
            amount: order.amount,
            status: order.status,
          }))
      : []
    if (live.length > 0) return live
    return user ? [] : mypageOrders
  }, [user])
}
