export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  image: string
  region: string
  regionGroup: string
  abv: number
  tasteTags: string[]
}

const PRODUCT_POOL: Omit<Product, 'id'>[] = [
  { name: '호랑이배꼽 막걸리', category: '막걸리', price: 11000, rating: 4.8, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '전북 정읍', regionGroup: '전라', abv: 6, tasteTags: ['#단맛', '#산미'] },
  { name: '청명 한방주', category: '약주', price: 45000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '충남 예산', regionGroup: '충청', abv: 16, tasteTags: ['#향', '#바디감'] },
  { name: '오미자 전통주', category: '과실주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '강원 정선', regionGroup: '강원', abv: 13, tasteTags: ['#산미', '#향'] },
  { name: '삼해 소주 오리지널', category: '증류주', price: 45000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '경기 김포', regionGroup: '서울/경기', abv: 45, tasteTags: ['#바디감', '#향'] },
  { name: '문배주 25도', category: '증류주', price: 38000, rating: 4.8, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '충남 서천', regionGroup: '충청', abv: 25, tasteTags: ['#바디감'] },
  { name: '이강주 23도', category: '약주', price: 52000, rating: 4.6, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전북 전주', regionGroup: '전라', abv: 23, tasteTags: ['#향', '#단맛'] },
  { name: '송화주', category: '약주', price: 48000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '강원 영월', regionGroup: '강원', abv: 18, tasteTags: ['#향', '#바디감'] },
  { name: '안동소주 17도', category: '증류주', price: 15000, rating: 4.5, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '경북 안동', regionGroup: '경상', abv: 17, tasteTags: ['#바디감'] },
  { name: '백세주', category: '약주', price: 22000, rating: 4.4, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '서울 강남', regionGroup: '서울/경기', abv: 13, tasteTags: ['#단맛', '#향'] },
  { name: '자두주', category: '과실주', price: 18000, rating: 4.6, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '경북 김천', regionGroup: '경상', abv: 12, tasteTags: ['#단맛', '#산미'] },
  { name: '복분자주', category: '과실주', price: 25000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전북 고창', regionGroup: '전라', abv: 15, tasteTags: ['#단맛', '#탄닌'] },
  { name: '한산 소곡주', category: '약주', price: 42000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '충남 서천', regionGroup: '충청', abv: 18, tasteTags: ['#향', '#바디감'] },
  { name: '국화주', category: '약주', price: 32000, rating: 4.5, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80', region: '경기 여주', regionGroup: '서울/경기', abv: 14, tasteTags: ['#향', '#산미'] },
  { name: '조광주', category: '증류주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80', region: '전남 담양', regionGroup: '전라', abv: 21, tasteTags: ['#바디감', '#탄닌'] },
  { name: '월백 막걸리', category: '막걸리', price: 9000, rating: 4.3, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80', region: '제주 서귀포', regionGroup: '제주', abv: 6, tasteTags: ['#단맛'] },
  { name: '화전 리큐르', category: '리큐르', price: 35000, rating: 4.6, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80', region: '강원 평창', regionGroup: '강원', abv: 16, tasteTags: ['#향', '#단맛'] },
]

export const trendingProducts: Product[] = PRODUCT_POOL.slice(0, 4).map((p, i) => ({
  ...p,
  id: i + 1,
}))

export const allProducts: Product[] = Array.from({ length: 48 }, (_, i) => {
  const base = PRODUCT_POOL[i % PRODUCT_POOL.length]
  return {
    ...base,
    id: i + 1,
    name: i >= PRODUCT_POOL.length ? `${base.name} ${Math.floor(i / PRODUCT_POOL.length) + 1}` : base.name,
    price: base.price + (i % 3) * 1000,
  }
})

export const PAGE_SIZE = 8

export function getProductsPage(page: number, pageSize = PAGE_SIZE): Product[] {
  const start = page * pageSize
  return allProducts.slice(start, start + pageSize)
}

export function hasMoreProducts(page: number, pageSize = PAGE_SIZE): boolean {
  return (page + 1) * pageSize < allProducts.length
}
