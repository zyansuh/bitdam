export type BookingKind = 'tour' | 'class'

export interface SiteBooking {
  id: string
  userId: string
  kind: BookingKind
  title: string
  place: string
  date: string
  time: string
  guests: number
  amount: number
  createdAt: string
}
