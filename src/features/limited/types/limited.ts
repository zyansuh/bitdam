export interface TasteAxis {
  id: string
  label: string
  value: number
}

export interface LimitedEdition {
  title: string
  master: string
  artist: string
  origin: number
  sale: number
  stock: number
  daysLeft: number
  abv: number
  volume: string
  ingredients: string
  notes: string
  tasting: string
  summary: string
  axes: TasteAxis[]
  fundShare: number
}
