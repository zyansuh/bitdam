import { useCallback, useState } from 'react'

export function useClassBooking() {
  const [booked, setBooked] = useState<Set<string>>(new Set())

  const book = useCallback((id: string) => {
    setBooked((prev) => new Set(prev).add(id))
  }, [])

  const isBooked = useCallback((id: string) => booked.has(id), [booked])

  return { book, isBooked }
}
