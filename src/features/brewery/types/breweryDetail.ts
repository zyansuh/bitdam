import type { Product } from '../../../data/products'
import type { BreweryPin } from '../data/breweries'

export type BreweryProfile = {
  subtitle: string
  heroTitle: string
  heroImage: string
  storyTitle: string
  story: string[]
  masterName: string
  masterRole: string
  masterQuote: string
  masterPhoto: string
  awards: string[]
  programTitle: string
  programDesc: string
  programPrice: number
  hours: string
  parking: string
}

export type BreweryDetail = BreweryPin &
  BreweryProfile & {
    products: Product[]
  }
