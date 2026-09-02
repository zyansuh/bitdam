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
  tasteTags: string[]
  taste: TasteProfile
  tagline: string
  story: string
  awards: string[]
}

export const TASTE_SCORE_MAX = 5

interface ProductSeed {
  name: string
  category: string
  price: number
  rating: number
  image: string
  region: string
  regionGroup: string
  abv: number
  tasteTags: string[]
  volumeMl: number
  brewery: string
  tagline: string
  story: string
  awards: string[]
  taste: TasteProfile
}

const PRODUCT_POOL: ProductSeed[] = [
  {
    name: '호랑이배꼽 막걸리',
    category: '막걸리',
    price: 11000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80',
    region: '전북 정읍',
    regionGroup: '전라',
    abv: 6,
    tasteTags: ['#단맛', '#산미'],
    volumeMl: 750,
    brewery: '정읍양조',
    tagline: '정읍 쌀의 단맛과 가벼운 산미가 호랑이처럼 또렷한 막걸리',
    story: '정읍의 쌀과 누룩으로 짧게 발효해 갓 빚은 듯한 곡향을 남깁니다. 부담 없는 도수에 식사와 함께 비우기 좋습니다.',
    awards: ['대한민국 우리술품평회 탁주 부문 우수상'],
    taste: { sweet: 4, sour: 3, body: 2, fresh: 4 },
  },
  {
    name: '청명 한방주',
    category: '약주',
    price: 45000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80',
    region: '충남 예산',
    regionGroup: '충청',
    abv: 16,
    tasteTags: ['#향', '#바디감'],
    volumeMl: 500,
    brewery: '예산 청명도가',
    tagline: '약재 향이 천천히 피어오르는 충남 예산의 약주',
    story: '예산의 약초와 쌀을 함께 빚어 약재의 잔향이 길게 남습니다. 차게 마시면 향이, 조금 데우면 바디가 살아납니다.',
    awards: ['충남 우리술 품평회 금상'],
    taste: { sweet: 2, sour: 2, body: 4, fresh: 3 },
  },
  {
    name: '오미자 전통주',
    category: '과실주',
    price: 28000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80',
    region: '강원 정선',
    regionGroup: '강원',
    abv: 13,
    tasteTags: ['#산미', '#향'],
    volumeMl: 375,
    brewery: '정선 오미원',
    tagline: '정선 오미자의 다섯 가지 맛이 한 잔에 모이다',
    story: '고랭지 오미자를 저온 침출해 신맛과 붉은 과실향을 살렸습니다. 디저트나 가벼운 안주와 잘 맞습니다.',
    awards: [],
    taste: { sweet: 3, sour: 5, body: 2, fresh: 4 },
  },
  {
    name: '삼해 소주 오리지널',
    category: '증류주',
    price: 45000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80',
    region: '경기 김포',
    regionGroup: '서울/경기',
    abv: 45,
    tasteTags: ['#바디감', '#향'],
    volumeMl: 500,
    brewery: '김포 삼해소주',
    tagline: '세 번의 발효를 거쳐 맑게 걸러낸 김포의 증류주',
    story: '전통 삼해주 제법을 증류로 이어 곡물의 단향과 단단한 바디를 남깁니다. 소량씩 음미하는 술입니다.',
    awards: ['대한민국 우리술품평회 증류주 대상'],
    taste: { sweet: 1, sour: 1, body: 5, fresh: 2 },
  },
  {
    name: '문배주 25도',
    category: '증류주',
    price: 38000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80',
    region: '충남 서천',
    regionGroup: '충청',
    abv: 25,
    tasteTags: ['#바디감'],
    volumeMl: 375,
    brewery: '서천 문배도가',
    tagline: '서천 바람과 햇볕을 머금은 중간 도수의 증류주',
    story: '문배 향이 은은하게 스치고, 목 넘김은 부드럽습니다. 25도는 식사와 대화 사이에 두기 좋은 도수입니다.',
    awards: ['충청 전통주 품평회 우수상'],
    taste: { sweet: 2, sour: 1, body: 4, fresh: 2 },
  },
  {
    name: '이강주 23도',
    category: '약주',
    price: 52000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80',
    region: '전북 전주',
    regionGroup: '전라',
    abv: 23,
    tasteTags: ['#향', '#단맛'],
    volumeMl: 400,
    brewery: '전주 이강조',
    tagline: '배·생강·울금이 겹치는 전주의 향기로운 약주',
    story: '전주에서 이어 온 이강주 레시피로 배의 단맛과 생강의 잔향을 맞췄습니다. 손님상에 올리기 좋은 병입니다.',
    awards: ['전북 우리술 품평회 최우수'],
    taste: { sweet: 4, sour: 2, body: 3, fresh: 3 },
  },
  {
    name: '송화주',
    category: '약주',
    price: 48000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80',
    region: '강원 영월',
    regionGroup: '강원',
    abv: 18,
    tasteTags: ['#향', '#바디감'],
    volumeMl: 500,
    brewery: '영월 송화도가',
    tagline: '소나무 꽃가루의 잔향이 남는 영월의 약주',
    story: '송화를 소량 더해 숲의 향을 은은하게 남깁니다. 차게 마시면 향이 먼저 열립니다.',
    awards: [],
    taste: { sweet: 2, sour: 2, body: 4, fresh: 3 },
  },
  {
    name: '안동소주 17도',
    category: '증류주',
    price: 15000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80',
    region: '경북 안동',
    regionGroup: '경상',
    abv: 17,
    tasteTags: ['#바디감'],
    volumeMl: 360,
    brewery: '안동 명인이네',
    tagline: '안동 증류 전통을 일상 도수로 낮춘 한 병',
    story: '전통 안동소주의 곡향은 남기고 도수는 식탁에 맞게 낮췄습니다. 구수함이 짧게 남습니다.',
    awards: ['경북 전통주 장려상'],
    taste: { sweet: 1, sour: 1, body: 3, fresh: 2 },
  },
  {
    name: '백세주',
    category: '약주',
    price: 22000,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80',
    region: '서울 강남',
    regionGroup: '서울/경기',
    abv: 13,
    tasteTags: ['#단맛', '#향'],
    volumeMl: 375,
    brewery: '서울 백세도가',
    tagline: '구기자와 오미자가 겹치는 도심의 약주',
    story: '약재의 단향이 부드럽게 퍼지고 목 넘김이 가볍습니다. 처음 전통주를 고를 때 부담이 적습니다.',
    awards: [],
    taste: { sweet: 4, sour: 2, body: 2, fresh: 3 },
  },
  {
    name: '자두주',
    category: '과실주',
    price: 18000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80',
    region: '경북 김천',
    regionGroup: '경상',
    abv: 12,
    tasteTags: ['#단맛', '#산미'],
    volumeMl: 500,
    brewery: '김천 자두원',
    tagline: '김천 자두의 단맛과 껍질의 산미',
    story: '모양은 고르지 않아도 향이 좋은 자두를 담가 계절의 단맛을 병 안에 남깁니다.',
    awards: ['경북 과실주 우수상'],
    taste: { sweet: 4, sour: 4, body: 2, fresh: 4 },
  },
  {
    name: '복분자주',
    category: '과실주',
    price: 25000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80',
    region: '전북 고창',
    regionGroup: '전라',
    abv: 15,
    tasteTags: ['#단맛', '#탄닌'],
    volumeMl: 375,
    brewery: '고창 복분자촌',
    tagline: '고창 복분자의 진한 과실과 가벼운 떫음',
    story: '고창 복분자를 침출해 색과 단맛을 살리고, 씨 쪽의 탄닌이 끝을 잡아 줍니다.',
    awards: ['전북 과실주 금상'],
    taste: { sweet: 5, sour: 3, body: 3, fresh: 2 },
  },
  {
    name: '한산 소곡주',
    category: '약주',
    price: 42000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80',
    region: '충남 서천',
    regionGroup: '충청',
    abv: 18,
    tasteTags: ['#향', '#바디감'],
    volumeMl: 700,
    brewery: '한산 소곡도가',
    tagline: '서천의 바람과 햇볕, 백제부터 이어 온 소곡의 손맛',
    story: '한산 소곡주는 쌀과 누룩을 오래 기다려 진한 곡향과 부드러운 바디를 만듭니다. 한 병에 양조장의 시간과 지역의 기후가 함께 담깁니다.',
    awards: ['대한민국 식품명인 우리술', '충남 우리술품평회 대상'],
    taste: { sweet: 3, sour: 2, body: 4, fresh: 3 },
  },
  {
    name: '국화주',
    category: '약주',
    price: 32000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=520&fit=crop&q=80',
    region: '경기 여주',
    regionGroup: '서울/경기',
    abv: 14,
    tasteTags: ['#향', '#산미'],
    volumeMl: 375,
    brewery: '여주 국화원',
    tagline: '여주 국화의 청향이 스치는 가벼운 약주',
    story: '꽃향이 먼저 오고 끝은 살짝 시원합니다. 따뜻한 안주보다 담백한 전과 잘 맞습니다.',
    awards: [],
    taste: { sweet: 2, sour: 3, body: 2, fresh: 5 },
  },
  {
    name: '조광주',
    category: '증류주',
    price: 28000,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=520&fit=crop&q=80',
    region: '전남 담양',
    regionGroup: '전라',
    abv: 21,
    tasteTags: ['#바디감', '#탄닌'],
    volumeMl: 500,
    brewery: '담양 죽향도가',
    tagline: '담양 대나무 숲의 기운을 닮은 단단한 증류주',
    story: '대나무 숯 여과로 잡향을 걷고 바디를 남겼습니다. 천천히 잔을 돌리며 마시기 좋습니다.',
    awards: ['전남 증류주 우수상'],
    taste: { sweet: 1, sour: 2, body: 4, fresh: 2 },
  },
  {
    name: '월백 막걸리',
    category: '막걸리',
    price: 9000,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=520&fit=crop&q=80',
    region: '제주 서귀포',
    regionGroup: '제주',
    abv: 6,
    tasteTags: ['#단맛'],
    volumeMl: 750,
    brewery: '서귀포 월백양조',
    tagline: '제주 쌀의 단맛이 부드러운 월백 막걸리',
    story: '서귀포의 온화한 기후 아래 짧게 익혀 단맛이 또렷합니다. 차갑게 흔들어 마시면 청량이 살아납니다.',
    awards: [],
    taste: { sweet: 4, sour: 2, body: 2, fresh: 4 },
  },
  {
    name: '화전 리큐르',
    category: '리큐르',
    price: 35000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=520&fit=crop&q=80',
    region: '강원 평창',
    regionGroup: '강원',
    abv: 16,
    tasteTags: ['#향', '#단맛'],
    volumeMl: 200,
    brewery: '평창 화전공방',
    tagline: '평창 야생화의 단향을 담은 작은 병',
    story: '꽃잎을 우려 디저트처럼 마시기 좋게 맞췄습니다. 작은 용량은 선물과 시음에 알맞습니다.',
    awards: ['강원 리큐르 장려상'],
    taste: { sweet: 5, sour: 1, body: 2, fresh: 3 },
  },
]

function toProduct(seed: ProductSeed, id: number, name = seed.name): Product {
  return {
    ...seed,
    id,
    name,
    reviewCount: Math.round(seed.rating * 28),
    gallery: [seed.image, seed.image, seed.image],
  }
}

export const trendingProducts: Product[] = PRODUCT_POOL.slice(0, 4).map((seed, index) =>
  toProduct(seed, index + 1),
)

export const allProducts: Product[] = Array.from({ length: 48 }, (_, index) => {
  const seed = PRODUCT_POOL[index % PRODUCT_POOL.length]
  const cycle = Math.floor(index / PRODUCT_POOL.length)
  const name = cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`
  return toProduct(
    {
      ...seed,
      price: seed.price + (index % 3) * 1000,
    },
    index + 1,
    name,
  )
})

export const PAGE_SIZE = 8

export function getProductsPage(page: number, pageSize = PAGE_SIZE): Product[] {
  const start = page * pageSize
  return allProducts.slice(start, start + pageSize)
}

export function hasMoreProducts(page: number, pageSize = PAGE_SIZE): boolean {
  return (page + 1) * pageSize < allProducts.length
}

export function getProductById(id: number): Product | undefined {
  return allProducts.find((product) => product.id === id)
}
