import { createContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../../data/products'
import { getProductById } from '../../data/products'
import type { CartLine } from '../types/cart'
import { readCartLines, writeCartLines } from '../utils/cartStorage'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  addItem: (productId: number, quantity?: number) => void
  setQuantity: (productId: number, quantity: number) => void
  removeItem: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)

interface CartProviderProps {
  children: ReactNode
}

function resolveItems(lines: CartLine[]): CartItem[] {
  return lines
    .map((line) => {
      const product = getProductById(line.productId)
      if (!product) {
        return null
      }
      return { product, quantity: line.quantity }
    })
    .filter((item): item is CartItem => item !== null)
}

export function CartProvider({ children }: CartProviderProps) {
  const [lines, setLines] = useState<CartLine[]>(() => readCartLines())

  const items = useMemo(() => resolveItems(lines), [lines])
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  function commit(next: CartLine[]) {
    writeCartLines(next)
    setLines(next)
  }

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      addItem: (productId, quantity = 1) => {
        const current = lines.find((line) => line.productId === productId)
        if (current) {
          commit(
            lines.map((line) =>
              line.productId === productId
                ? { ...line, quantity: Math.min(9, line.quantity + quantity) }
                : line,
            ),
          )
          return
        }
        commit([...lines, { productId, quantity: Math.min(9, quantity) }])
      },
      setQuantity: (productId, quantity) => {
        if (quantity < 1) {
          commit(lines.filter((line) => line.productId !== productId))
          return
        }
        commit(
          lines.map((line) =>
            line.productId === productId ? { ...line, quantity: Math.min(9, quantity) } : line,
          ),
        )
      },
      removeItem: (productId) => {
        commit(lines.filter((line) => line.productId !== productId))
      },
      clearCart: () => {
        commit([])
      },
    }),
    [items, itemCount, lines],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
