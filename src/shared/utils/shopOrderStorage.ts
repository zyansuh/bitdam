import type { ShopOrder } from '../types/shopOrder'

export const SHOP_ORDERS_KEY = 'bitdam.shop.orders'
export const SHOP_ORDER_EVENT = 'bitdam:shop-order'

const KEY = SHOP_ORDERS_KEY
const CHANNEL = 'bitdam.shop.orders'

export function readShopOrders(): ShopOrder[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as ShopOrder[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeShopOrders(orders: ShopOrder[]): void {
  localStorage.setItem(KEY, JSON.stringify(orders))
}

function publishOrder(order: ShopOrder) {
  window.dispatchEvent(new CustomEvent(SHOP_ORDER_EVENT, { detail: order }))
  try {
    const channel = new BroadcastChannel(CHANNEL)
    channel.postMessage(order)
    channel.close()
  } catch {
    // BroadcastChannel is missing in some embedded browsers.
  }
}

export function appendShopOrder(order: ShopOrder): void {
  writeShopOrders([order, ...readShopOrders().filter((item) => item.id !== order.id)])
  publishOrder(order)
}

export function getShopOrder(id: string | undefined): ShopOrder | undefined {
  if (!id) return undefined
  return readShopOrders().find((order) => order.id === id)
}

export function patchShopOrder(id: string, patch: Partial<ShopOrder>): ShopOrder | undefined {
  const orders = readShopOrders()
  const next = orders.map((order) => (order.id === id ? { ...order, ...patch } : order))
  writeShopOrders(next)
  return next.find((order) => order.id === id)
}

export function createShopOrderId(): string {
  const now = new Date()
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const prefix = `BD-${stamp}-`
  const sameDay = readShopOrders().filter((order) => order.id.startsWith(prefix)).length
  return `${prefix}${String(sameDay + 1).padStart(3, '0')}`
}
