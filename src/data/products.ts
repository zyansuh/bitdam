import { readSellerCatalog } from '../shared/utils/sellerCatalogStorage'
import { readStockOverlay, writeStockOverlay } from '../shared/utils/stockStorage'

export interface TasteProfile {
  sweet: number
  sour: number
  body: number
  fresh: number
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  reviewCount: number
  image: string
  gallery: string[]
  region: string
  regionGroup: string
  abv: number
  volumeMl: number
  brewery: string
  sellerId: string
  tasteTags: string[]
  taste: TasteProfile
  tagline: string
  story: string
  awards: string[]
  stock?: number
}

export const TASTE_SCORE_MAX = 5

const PRODUCT_POOL: Omit<Product, 'id' | 'reviewCount' | 'gallery'>[] = [
  { name: '호랑이배꼽 막걸리', category: '막걸리', price: 11000, rating: 4.8, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '전북 정읍', regionGroup: '전라', abv: 6, tasteTags: ['#단맛', '#산미'], volumeMl: 750, brewery: '정읍양조', sellerId: 'hansan', tagline: '정읍 쌀의 단맛과 가벼운 산미', story: '정읍의 쌀과 누룩으로 짧게 발효해 갓 빚은 듯한 곡향을 남깁니다.', awards: ['우리술품평회 탁주 우수상'], taste: { sweet: 4, sour: 3, body: 2, fresh: 4 } },
  { name: '청명 한방주', category: '약주', price: 45000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '충남 예산', regionGroup: '충청', abv: 16, tasteTags: ['#향', '#바디감'], volumeMl: 500, brewery: '예산 청명도가', sellerId: 'hansan', tagline: '약재 향이 천천히 피어오르는 약주', story: '예산의 약초와 쌀을 함께 빚어 약재의 잔향이 길게 남습니다.', awards: [], taste: { sweet: 3, sour: 2, body: 4, fresh: 2 } },
  { name: '오미자 전통주', category: '과실주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '강원 정선', regionGroup: '강원', abv: 13, tasteTags: ['#산미', '#향'], volumeMl: 500, brewery: '정선 오미자도가', sellerId: 'andong', tagline: '오미자의 산미가 또렷한 과실주', story: '정선 오미자를 우려 새콤한 끝맛이 남습니다.', awards: [], taste: { sweet: 3, sour: 4, body: 3, fresh: 4 } },
  { name: '삼해 소주 오리지널', category: '증류주', price: 45000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '경기 김포', regionGroup: '서울/경기', abv: 45, tasteTags: ['#바디감', '#향'], volumeMl: 375, brewery: '김포 삼해도가', sellerId: 'andong', tagline: '세 번 내린 증류의 결', story: '김포에서 세 번 내려 맑은 바디를 남깁니다.', awards: ['증류주 부문 대상'], taste: { sweet: 1, sour: 1, body: 5, fresh: 3 } },
  { name: '문배주 25도', category: '증류주', price: 38000, rating: 4.8, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '충남 서천', regionGroup: '충청', abv: 25, tasteTags: ['#바디감'], volumeMl: 375, brewery: '서천 문배도가', sellerId: 'hansan', tagline: '밀 향이 남는 증류주', story: '서천의 밀로 빚어 구수한 향이 납니다.', awards: [], taste: { sweet: 2, sour: 1, body: 4, fresh: 2 } },
  { name: '이강주 23도', category: '약주', price: 52000, rating: 4.6, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전북 전주', regionGroup: '전라', abv: 23, tasteTags: ['#향', '#단맛'], volumeMl: 500, brewery: '전주 이강도가', sellerId: 'hansan', tagline: '배와 생강의 잔향', story: '전주의 배와 생강을 더해 달큰한 약주가 됩니다.', awards: [], taste: { sweet: 4, sour: 2, body: 3, fresh: 3 } },
  { name: '송화주', category: '약주', price: 48000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '강원 영월', regionGroup: '강원', abv: 18, tasteTags: ['#향', '#바디감'], volumeMl: 500, brewery: '영월 송화도가', sellerId: 'andong', tagline: '송화가 남는 약주', story: '영월 송화를 우려 은은한 향이 길게 갑니다.', awards: [], taste: { sweet: 3, sour: 2, body: 4, fresh: 3 } },
  { name: '안동소주 17도', category: '증류주', price: 15000, rating: 4.5, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '경북 안동', regionGroup: '경상', abv: 17, tasteTags: ['#바디감'], volumeMl: 360, brewery: '안동 명인도가', sellerId: 'andong', tagline: '안동에서 내린 가벼운 소주', story: '안동 명인이 낮게 내려 식사와 어울립니다.', awards: [], taste: { sweet: 1, sour: 1, body: 3, fresh: 4 } },
  { name: '백세주', category: '약주', price: 22000, rating: 4.4, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '서울 강남', regionGroup: '서울/경기', abv: 13, tasteTags: ['#단맛', '#향'], volumeMl: 375, brewery: '서울 백세도가', sellerId: 'hansan', tagline: '구기자 향의 약주', story: '구기자와 쌀로 달큰한 약주를 빚습니다.', awards: [], taste: { sweet: 4, sour: 2, body: 3, fresh: 2 } },
  { name: '자두주', category: '과실주', price: 18000, rating: 4.6, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '경북 김천', regionGroup: '경상', abv: 12, tasteTags: ['#단맛', '#산미'], volumeMl: 500, brewery: '김천 자두도가', sellerId: 'andong', tagline: '김천 자두의 단맛', story: '김천 자두를 발효해 상큼한 과실주가 됩니다.', awards: [], taste: { sweet: 4, sour: 3, body: 2, fresh: 4 } },
  { name: '복분자주', category: '과실주', price: 25000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전북 고창', regionGroup: '전라', abv: 15, tasteTags: ['#단맛', '#탄닌'], volumeMl: 375, brewery: '고창 복분자도가', sellerId: 'hansan', tagline: '고창 복분자의 탄닌', story: '고창 복분자로 진한 색과 단맛을 남깁니다.', awards: [], taste: { sweet: 4, sour: 2, body: 4, fresh: 2 } },
  { name: '한산 소곡주', category: '약주', price: 42000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '충남 서천', regionGroup: '충청', abv: 18, tasteTags: ['#향', '#바디감'], volumeMl: 500, brewery: '한산 소곡도가', sellerId: 'hansan', tagline: '한산 소곡주의 깊은 향', story: '서천 한산에서 오래 숙성해 바디가 살아 있습니다.', awards: ['약주 부문 명인'], taste: { sweet: 3, sour: 2, body: 5, fresh: 2 } },
  { name: '국화주', category: '약주', price: 32000, rating: 4.5, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '경기 여주', regionGroup: '서울/경기', abv: 14, tasteTags: ['#향', '#산미'], volumeMl: 500, brewery: '여주 국화도가', sellerId: 'hansan', tagline: '국화 향이 먼저 오는 약주', story: '여주 국화를 더해 산뜻한 향이 납니다.', awards: [], taste: { sweet: 2, sour: 3, body: 3, fresh: 4 } },
  { name: '조광주', category: '증류주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전남 담양', regionGroup: '전라', abv: 21, tasteTags: ['#바디감', '#탄닌'], volumeMl: 375, brewery: '담양 조광도가', sellerId: 'andong', tagline: '대나무 고을의 증류주', story: '담양에서 내려 탄닌감이 남는 증류주입니다.', awards: [], taste: { sweet: 2, sour: 1, body: 4, fresh: 3 } },
  { name: '월백 막걸리', category: '막걸리', price: 9000, rating: 4.3, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '제주 서귀포', regionGroup: '제주', abv: 6, tasteTags: ['#단맛'], volumeMl: 750, brewery: '서귀포 월백도가', sellerId: 'andong', tagline: '제주 쌀의 가벼운 막걸리', story: '서귀포에서 짧게 발효해 마시기 쉽습니다.', awards: [], taste: { sweet: 4, sour: 2, body: 2, fresh: 5 } },
  { name: '화전 리큐르', category: '리큐르', price: 35000, rating: 4.6, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '강원 평창', regionGroup: '강원', abv: 16, tasteTags: ['#향', '#단맛'], volumeMl: 200, brewery: '평창 화전도가', sellerId: 'andong', tagline: '꽃잎을 우린 리큐르', story: '평창의 꽃잎을 우려 달큰한 디저트 술입니다.', awards: [], taste: { sweet: 5, sour: 2, body: 2, fresh: 3 } },
]

export const trendingProducts: Product[] = PRODUCT_POOL.slice(0, 4).map((p, i) => ({
  ...p,
  id: i + 1,
  reviewCount: Math.round(p.rating * 18),
  gallery: [p.image, p.image],
}))

export const allProducts: Product[] = Array.from({ length: 48 }, (_, i) => {
  const base = PRODUCT_POOL[i % PRODUCT_POOL.length]
  return {
    ...base,
    id: i + 1,
    name: i >= PRODUCT_POOL.length ? `${base.name} ${Math.floor(i / PRODUCT_POOL.length) + 1}` : base.name,
    price: base.price + (i % 3) * 1000,
    reviewCount: Math.round(base.rating * 18) + (i % 7),
    gallery: [base.image, base.image],
    stock: i === 14 ? 0 : 12 + (i % 18),
  }
})

export const PAGE_SIZE = 8

function fallbackStock(product: Product): number {
  if (typeof product.stock === 'number') return product.stock
  return product.id === 15 ? 0 : 12 + (product.id % 18)
}

function withStock(product: Product): Product {
  const overlay = readStockOverlay()[String(product.id)]
  return { ...product, stock: overlay ?? fallbackStock(product) }
}

export function listCatalogProducts(): Product[] {
  return [...allProducts, ...readSellerCatalog()].map(withStock)
}

export function isSoldOut(product: Product): boolean {
  return (product.stock ?? 0) <= 0
}

export function consumeCatalogStock(lines: { productId: number; quantity: number }[]): void {
  const overlay = { ...readStockOverlay() }
  for (const line of lines) {
    const current = getProductById(line.productId)?.stock ?? 0
    overlay[String(line.productId)] = Math.max(0, current - line.quantity)
    writeStockOverlay(overlay)
  }
}

export function getProductById(id: number): Product | undefined {
  return listCatalogProducts().find((item) => item.id === id)
}

export function getProductsPage(page: number, pageSize = PAGE_SIZE): Product[] {
  const start = page * pageSize
  return listCatalogProducts().slice(start, start + pageSize)
}

export function hasMoreProducts(page: number, pageSize = PAGE_SIZE): boolean {
  return (page + 1) * pageSize < listCatalogProducts().length
}
