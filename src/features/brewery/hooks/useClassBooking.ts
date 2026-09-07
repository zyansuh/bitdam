import { useCallback, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { appendBooking } from '../../../shared/utils/bookingStorage'
import type { ClassSession } from '../types/classSession'

export function useClassBooking() {
  const { user } = useAuth()
  const [booked, setBooked] = useState<Set<string>>(new Set())

  const book = useCallback(
    (session: ClassSession) => {
      setBooked((prev) => new Set(prev).add(session.id))
      if (!user) return
      appendBooking({
        id: `class-${session.id}-${user.id}`,
        userId: user.id,
        kind: 'class',
        title: session.title,
        place: session.place,
        date: session.dateKey,
        time: session.dateLabel,
        guests: 1,
        amount: session.price,
        createdAt: new Date().toISOString(),
      })
    },
    [user],
  )

  const isBooked = useCallback((id: string) => booked.has(id), [booked])

  return { book, isBooked }
}
