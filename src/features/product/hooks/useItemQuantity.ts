import { useState } from 'react'

export function useItemQuantity(initial = 1, max = 9) {
  const [quantity, setQuantity] = useState(initial)
  const cap = Math.max(0, max)

  function decrease() {
    setQuantity((current) => Math.max(cap === 0 ? 0 : 1, current - 1))
  }

  function increase() {
    setQuantity((current) => Math.min(cap, current + 1))
  }

  return { quantity: cap === 0 ? 0 : Math.min(quantity, cap), decrease, increase }
}
