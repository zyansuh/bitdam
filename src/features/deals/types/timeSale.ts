export type DealCategory = 'all' | '증류주' | '약주' | '막걸리' | '과실주'

export type DealDiscountBand = 'all' | '30' | '20' | '10'

export interface TimeSaleItem {
  id: number
  name: string
  image: string
  category: DealCategory
  origin: number
  sale: number
  discount: number
  sold: number
  stock: number
  remain: number
}
