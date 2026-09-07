import { useEffect, useState } from 'react'
import type { CountdownParts } from '../types/countdown'
import { splitDuration } from '../utils/splitDuration'

export function useCountdown(endsAt: string): CountdownParts {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return splitDuration(new Date(endsAt).getTime() - now)
}
