import { listCatalogProducts } from '../../../data/products'
import type { ChatProductRef } from '../types/chat'

export function pickChatProducts(text: string): ChatProductRef[] {
  const hits = listCatalogProducts().filter((item) => text.includes(item.name)).slice(0, 2)
  const fallback =
    hits.length > 0
      ? hits
      : allProducts.filter((item) => item.name.includes('소곡주') || item.category === '약주').slice(0, 1)

  return fallback.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    category: item.category,
    abv: item.abv,
  }))
}
