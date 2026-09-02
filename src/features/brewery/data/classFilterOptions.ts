import type { ClassDurationBucket, ClassLevel } from '../types/classSession'

export const CLASS_LEVEL_OPTIONS: { id: ClassLevel; label: string }[] = [
  { id: 'beginner', label: '입문자' },
  { id: 'basic', label: '초급' },
  { id: 'master', label: '명인' },
]

export const CLASS_DURATION_OPTIONS: { id: ClassDurationBucket; label: string }[] = [
  { id: 'under2', label: '2시간 미만' },
  { id: 'mid', label: '2–4시간' },
  { id: 'over4', label: '4시간 초과' },
]
