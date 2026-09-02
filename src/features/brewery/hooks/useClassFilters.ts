import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { classSessions } from '../data/classSessions'
import type { ClassDurationBucket, ClassLevel } from '../types/classSession'
import { classDurationBucket } from '../utils/classDurationBucket'

const levels: ClassLevel[] = ['beginner', 'basic', 'master']
const durations: ClassDurationBucket[] = ['under2', 'mid', 'over4']

export function useClassFilters() {
  const [params] = useSearchParams()
  const breweryId = params.get('brewery')
  const [dateKey, setDateKey] = useState<string | null>(null)
  const [levelOn, setLevelOn] = useState<Set<ClassLevel>>(new Set())
  const [durationOn, setDurationOn] = useState<Set<ClassDurationBucket>>(new Set())

  const toggleLevel = (level: ClassLevel) => {
    setLevelOn((prev) => {
      const next = new Set(prev)
      if (next.has(level)) next.delete(level)
      else next.add(level)
      return next
    })
  }

  const toggleDuration = (bucket: ClassDurationBucket) => {
    setDurationOn((prev) => {
      const next = new Set(prev)
      if (next.has(bucket)) next.delete(bucket)
      else next.add(bucket)
      return next
    })
  }

  const filtered = useMemo(() => {
    return classSessions.filter((session) => {
      if (breweryId && session.breweryId !== breweryId) return false
      if (dateKey && session.dateKey !== dateKey) return false
      if (levelOn.size > 0 && !levelOn.has(session.level)) return false
      if (durationOn.size > 0 && !durationOn.has(classDurationBucket(session.durationHours))) return false
      return true
    })
  }, [breweryId, dateKey, durationOn, levelOn])

  const featured = filtered.find((session) => session.featured)
  const list = filtered.filter((session) => session.id !== featured?.id)
  const availableDates = new Set(
    classSessions
      .filter((session) => !breweryId || session.breweryId === breweryId)
      .map((session) => session.dateKey),
  )

  return {
    breweryId,
    dateKey,
    setDateKey,
    levelOn,
    toggleLevel,
    durationOn,
    toggleDuration,
    featured,
    list,
    availableDates,
    levels,
    durations,
  }
}
