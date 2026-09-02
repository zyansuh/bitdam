export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  image: string
}

const PRODUCT_POOL: Omit<Product, 'id'>[] = [
  { name: '호랑이배꼽 막걸리', category: '막걸리', price: 12000, rating: 4.9, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80' },
  { name: '청명 한방주', category: '약주', price: 45000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80' },
  { name: '오미자 전통주', category: '과실주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80' },
  { name: '삼해소주 25도', category: '증류주', price: 35000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80' },
  { name: '문배주 25도', category: '증류주', price: 38000, rating: 4.8, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80' },
  { name: '이강주 23도', category: '약주', price: 52000, rating: 4.6, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80' },
  { name: '송화주', category: '약주', price: 48000, rating: 4.7, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80' },
  { name: '안동소주 17도', category: '증류주', price: 15000, rating: 4.5, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80' },
  { name: '백세주', category: '약주', price: 22000, rating: 4.4, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80' },
  { name: '자두주', category: '과실주', price: 18000, rating: 4.6, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80' },
  { name: '복분자주', category: '과실주', price: 25000, rating: 4.8, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80' },
  { name: '한산 소곡주', category: '약주', price: 42000, rating: 4.9, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80' },
  { name: '국화주', category: '약주', price: 32000, rating: 4.5, image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80' },
  { name: '조광주', category: '증류주', price: 28000, rating: 4.7, image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80' },
  { name: '월백 막걸리', category: '막걸리', price: 9000, rating: 4.3, image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80' },
  { name: '화전주', category: '약주', price: 35000, rating: 4.6, image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80' },
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
