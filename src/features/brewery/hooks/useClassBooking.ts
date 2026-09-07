import { useCallback, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { appendBooking } from '../../../shared/utils/bookingStorage'
import { appendSiteNotice, makeSiteNotice } from '../../notify/utils/siteNoticeStorage'
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
      appendSiteNotice(
        makeSiteNotice({
          kind: 'event',
          title: `${session.title} 예약이 접수되었습니다`,
          body: `${session.place} · ${session.dateLabel}`,
          actionLabel: '예약 내역',
          actionTo: '/mypage/reservations',
          audienceId: user.id,
        }),
      )
    },
    [user],
  )

  const isBooked = useCallback((id: string) => booked.has(id), [booked])

  return { book, isBooked }
}
