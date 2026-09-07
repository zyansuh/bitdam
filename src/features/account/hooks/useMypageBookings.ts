import { useMemo, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { bookingsForUser } from '../../../shared/utils/bookingStorage'

export function useMypageBookings() {
  const { user } = useAuth()
  const [tick, setTick] = useState(0)
  const rows = useMemo(() => (user ? bookingsForUser(user.id) : []), [user, tick])
  return { rows, reload: () => setTick((value) => value + 1) }
}
