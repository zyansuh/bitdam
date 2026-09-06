export interface HolidayPrize {
  rank: string
  title: string
  detail: string
  extra: string
}

export interface HolidayWinner {
  prize: string
  name: string
  city: string
  phone: string
  date: string
}

export interface HolidayGiftSet {
  id: string
  name: string
  contents: string
  priceFrom: number
  priceTo: number
  image: string
}

export interface HolidayEvent {
  slug: string
  navLabel: string
  badge: string
  title: string
  lead: string
  endsAt: string
  entries: number
  heroImage: string
  steps: string[]
  prizes: HolidayPrize[]
  winners: HolidayWinner[]
  sets: HolidayGiftSet[]
  active: boolean
}
