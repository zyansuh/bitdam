import type { Product } from '../../../data/products'
import type { ProductDraft, SellerShop } from '../types/lounge'

function catalogCategory(label: string): string {
  if (label.includes('막걸리') || label.includes('탁주')) return '막걸리'
  if (label.includes('약주') || label.includes('청주')) return '약주'
  if (label.includes('과실')) return '과실주'
  if (label.includes('리큐르')) return '리큐르'
  return '증류주'
}

function regionGroupOf(region: string): string {
  if (region.includes('전북') || region.includes('전남')) return '전라'
  if (region.includes('충')) return '충청'
  if (region.includes('경북') || region.includes('경남')) return '경상'
  if (region.includes('강원')) return '강원'
  if (region.includes('제주')) return '제주'
  if (region.includes('서울') || region.includes('경기')) return '서울/경기'
  return region
}

export function draftToCatalogProduct(draft: ProductDraft, shop: SellerShop, id: number): Product {
  const image = draft.image.trim() || shop.image
  const price = Number(draft.price) || 0
  const stock = Math.max(0, Number(draft.stock) || 0)
  return {
    id,
    name: draft.name.trim(),
    category: catalogCategory(draft.category),
    price,
    rating: 0,
    reviewCount: 0,
    image,
    gallery: [image, ...draft.extras.filter(Boolean)].slice(0, 4),
    region: shop.region,
    regionGroup: regionGroupOf(shop.region),
    abv: 16,
    volumeMl: 500,
    brewery: shop.name,
    sellerId: shop.id,
    tasteTags: [],
    taste: { sweet: 3, sour: 2, body: 3, fresh: 3 },
    tagline: draft.blurb.trim() || draft.name.trim(),
    story: draft.story.trim() || draft.blurb.trim(),
    awards: [],
    stock,
  }
}
