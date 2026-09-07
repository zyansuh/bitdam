import type { ShopOrder } from '../types/shopOrder'

const KEY = 'bitdam.shop.orders'

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

export function appendShopOrder(order: ShopOrder): void {
  writeShopOrders([order, ...readShopOrders().filter((item) => item.id !== order.id)])
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
  const stamp = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const suffix = String(Math.floor(1000 + Math.random() * 9000))
  return `S${stamp}-${suffix}`
}
