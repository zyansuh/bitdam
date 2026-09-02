import { useEffect, useState } from 'react'

export function useFeaturedCarousel(length: number, resetKey: unknown) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [resetKey])

  const safeLength = Math.max(length, 1)

  return {
    index,
    goPrev: () => setIndex((prev) => (prev - 1 + safeLength) % safeLength),
    goNext: () => setIndex((prev) => (prev + 1) % safeLength),
  }
}
