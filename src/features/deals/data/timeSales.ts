import { allProducts } from '../../../data/products'
import type { DealCategory, TimeSaleItem } from '../types/timeSale'

const CATEGORY_MAP: Record<string, DealCategory> = {
  증류주: '증류주',
  약주: '약주',
  청주: '약주',
  막걸리: '막걸리',
  탁주: '막걸리',
  과실주: '과실주',
  리큐르: '과실주',
}

export const TIME_SALE_END = (() => {
  const end = new Date()
  end.setHours(23, 59, 59, 999)
  return end.toISOString()
})()

export const TIME_SALE_ITEMS: TimeSaleItem[] = allProducts.slice(0, 16).map((item, index) => {
  const discount = [40, 30, 20, 25, 35, 15][index % 6]
  const sale = Math.round((item.price * (100 - discount)) / 100 / 1000) * 1000
  const stock = 100
  const remain = [5, 12, 28, 40, 8, 18][index % 6]
  return {
    id: item.id,
    name: item.name,
    image: item.image,
    category: CATEGORY_MAP[item.category] ?? '약주',
    origin: item.price,
    sale,
    discount,
    sold: Math.round(((stock - remain) / stock) * 100),
    stock,
    remain,
  }
})

export const FEATURED_DEAL = TIME_SALE_ITEMS[0]
