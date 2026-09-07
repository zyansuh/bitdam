export interface CorporateSet {
  id: string
  name: string
  contents: string
  priceFrom: number
  priceTo: number
  image: string
}

export interface CorporateTier {
  qty: string
  benefit: string
}

export interface CorporateQuote {
  company: string
  contact: string
  qty: string
  note: string
  sent: boolean
}
