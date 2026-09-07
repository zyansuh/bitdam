import type { SiteBooking } from '../types/booking'

const KEY = 'bitdam.bookings'

export function readBookings(): SiteBooking[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as SiteBooking[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeBookings(rows: SiteBooking[]): void {
  localStorage.setItem(KEY, JSON.stringify(rows))
}

export function appendBooking(row: SiteBooking): void {
  writeBookings([row, ...readBookings().filter((item) => item.id !== row.id)])
}

export function bookingsForUser(userId: string): SiteBooking[] {
  return readBookings().filter((row) => row.userId === userId)
}
