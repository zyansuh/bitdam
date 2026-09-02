export type ClassLevel = 'beginner' | 'basic' | 'master'

export type ClassDurationBucket = 'under2' | 'mid' | 'over4'

export type ClassSession = {
  id: string
  breweryId: string
  title: string
  image: string
  place: string
  dateKey: string
  dateLabel: string
  price: number
  level: ClassLevel
  durationHours: number
  closed: boolean
  featured?: boolean
  featuredKicker?: string
}
