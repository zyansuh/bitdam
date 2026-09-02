import type { ClassDurationBucket } from '../types/classSession'

export function classDurationBucket(hours: number): ClassDurationBucket {
  if (hours < 2) return 'under2'
  if (hours > 4) return 'over4'
  return 'mid'
}
