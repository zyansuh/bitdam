import { useState } from 'react'

export function useItemQuantity(initial = 1) {
  const [quantity, setQuantity] = useState(initial)

  function decrease() {
    setQuantity((current) => Math.max(1, current - 1))
  }

  function increase() {
    setQuantity((current) => Math.min(9, current + 1))
  }

  return { quantity, decrease, increase }
}
