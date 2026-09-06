import { useState } from 'react'

export function useLimitedReserve() {
  const [reserved, setReserved] = useState(false)

  function reserve() {
    setReserved(true)
  }

  return { reserved, reserve }
}
