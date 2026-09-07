import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { canHearOrderAlerts, resolveWorkspaceRole } from '../utils/workspaceRole'
import type { ShopOrder } from '../types/shopOrder'
import { readShopOrders, SHOP_ORDER_EVENT, SHOP_ORDERS_KEY } from '../utils/shopOrderStorage'

const HEARD_KEY = 'bitdam.staff.heard-orders'
const CHANNEL = 'bitdam.shop.orders'

function readHeard(): Set<string> {
  try {
    const raw = sessionStorage.getItem(HEARD_KEY)
    const parsed = raw ? (JSON.parse(raw) as string[]) : []
    return new Set(Array.isArray(parsed) ? parsed : [])
  } catch {
    return new Set()
  }
}

function writeHeard(ids: Set<string>) {
  sessionStorage.setItem(HEARD_KEY, JSON.stringify([...ids]))
}

export function useStaffOrderAlerts() {
  const { user } = useAuth()
  const allowed = canHearOrderAlerts(resolveWorkspaceRole(user))
  const [toasts, setToasts] = useState<ShopOrder[]>([])
  const [openOrder, setOpenOrder] = useState<ShopOrder | null>(null)

  useEffect(() => {
    if (!allowed) return

    const heard = readHeard()
    if (heard.size === 0) {
      for (const order of readShopOrders()) heard.add(order.id)
      writeHeard(heard)
    }

    function ingest(order: ShopOrder) {
      const known = readHeard()
      if (known.has(order.id)) return
      known.add(order.id)
      writeHeard(known)
      setToasts((current) => [order, ...current.filter((item) => item.id !== order.id)].slice(0, 3))
    }

    function onCustom(event: Event) {
      const detail = (event as CustomEvent<ShopOrder>).detail
      if (detail?.id) ingest(detail)
    }

    function onStorage(event: StorageEvent) {
      if (event.key !== SHOP_ORDERS_KEY) return
      const latest = readShopOrders()[0]
      if (latest) ingest(latest)
    }

    let channel: BroadcastChannel | null = null
    try {
      channel = new BroadcastChannel(CHANNEL)
      channel.onmessage = (event: MessageEvent<ShopOrder>) => {
        if (event.data?.id) ingest(event.data)
      }
    } catch {
      channel = null
    }

    const timer = window.setInterval(() => {
      for (const order of readShopOrders()) ingest(order)
    }, 4000)

    window.addEventListener(SHOP_ORDER_EVENT, onCustom)
    window.addEventListener('storage', onStorage)
    return () => {
      window.clearInterval(timer)
      window.removeEventListener(SHOP_ORDER_EVENT, onCustom)
      window.removeEventListener('storage', onStorage)
      channel?.close()
    }
  }, [allowed])

  useEffect(() => {
    if (toasts.length === 0) return
    const id = toasts[0]?.id
    if (!id) return
    const timer = window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id))
    }, 8000)
    return () => window.clearTimeout(timer)
  }, [toasts])

  function dismiss(id: string) {
    setToasts((current) => current.filter((item) => item.id !== id))
  }

  return {
    allowed,
    toasts,
    openOrder,
    open: (order: ShopOrder) => {
      setOpenOrder(order)
      dismiss(order.id)
    },
    close: () => setOpenOrder(null),
    dismiss,
  }
}
