export type MapRegionId =
  | 'all'
  | 'gyeonggi'
  | 'gangwon'
  | 'chungbuk'
  | 'chungnam'
  | 'jeonbuk'
  | 'jeonnam'
  | 'gyeongbuk'
  | 'gyeongnam'
  | 'jeju'

export interface MapRegion {
  id: MapRegionId
  label: string
}

export interface BreweryPin {
  id: string
  name: string
  breweryKey: string
  region: string
  regionId: Exclude<MapRegionId, 'all'>
  address: string
  rating: number
  summary: string
  image: string
  lat: number
  lng: number
}

export const MAP_REGIONS: MapRegion[] = [
  { id: 'all', label: '전체' },
  { id: 'gyeonggi', label: '경기/인천' },
  { id: 'gangwon', label: '강원' },
  { id: 'chungbuk', label: '충북' },
  { id: 'chungnam', label: '충남/대전' },
  { id: 'jeonbuk', label: '전북' },
  { id: 'jeonnam', label: '전남/광주' },
  { id: 'gyeongbuk', label: '경북' },
  { id: 'gyeongnam', label: '경남/부산' },
  { id: 'jeju', label: '제주' },
]

export const BREWERIES: BreweryPin[] = [
  {
    id: 'samhae',
    name: '김포 삼해소주 양조장',
    breweryKey: '김포 삼해소주',
    region: '경기 김포',
    regionId: 'gyeonggi',
    address: '경기도 김포시 대곶면',
    rating: 4.9,
    summary: '세 번의 발효를 거쳐 맑게 걸러 내는 김포의 증류 명가입니다.',
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=280&fit=crop&q=80',
    lat: 37.649,
    lng: 126.532,
  },
  {
    id: 'omija',
    name: '정선 오미원',
    breweryKey: '정선 오미원',
    region: '강원 정선',
    regionId: 'gangwon',
    address: '강원특별자치도 정선군',
    rating: 4.7,
    summary: '고랭지 오미자를 저온 침출해 다섯 가지 맛을 한 잔에 담습니다.',
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=280&fit=crop&q=80',
    lat: 37.38,
    lng: 128.661,
  },
  {
    id: 'cheongju',
    name: '청주 가양주공방',
    breweryKey: '예산 청명도가',
    region: '충북 청주',
    regionId: 'chungbuk',
    address: '충청북도 청주시',
    rating: 4.6,
    summary: '내륙의 쌀과 누룩으로 담근 가양주. 충북 식탁의 기본이 되는 병입니다.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=280&fit=crop&q=80',
    lat: 36.642,
    lng: 127.489,
  },
  {
    id: 'cheongmyeong',
    name: '예산 청명도가',
    breweryKey: '예산 청명도가',
    region: '충남 예산',
    regionId: 'chungnam',
    address: '충청남도 예산군',
    rating: 4.8,
    summary: '약재 향이 천천히 피어오르는 예산의 약주 도가입니다.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=280&fit=crop&q=80',
    lat: 36.682,
    lng: 126.845,
  },
  {
    id: 'hansan',
    name: '한산 소곡주 양조장',
    breweryKey: '한산 소곡도가',
    region: '충남 서천',
    regionId: 'chungnam',
    address: '충청남도 서천군 한산면',
    rating: 4.9,
    summary: '백제부터 이어 온 소곡. 쌀과 누룩을 오래 기다려 진한 곡향을 빚습니다.',
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=280&fit=crop&q=80',
    lat: 36.083,
    lng: 126.754,
  },
  {
    id: 'munbae',
    name: '서천 문배도가',
    breweryKey: '서천 문배도가',
    region: '충남 서천',
    regionId: 'chungnam',
    address: '충청남도 서천군',
    rating: 4.8,
    summary: '문배 향이 은은하고 목 넘김이 부드러운 중간 도수 증류주 도가입니다.',
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=280&fit=crop&q=80',
    lat: 36.08,
    lng: 126.69,
  },
  {
    id: 'jeongeup',
    name: '정읍양조',
    breweryKey: '정읍양조',
    region: '전북 정읍',
    regionId: 'jeonbuk',
    address: '전북특별자치도 정읍시',
    rating: 4.8,
    summary: '정읍 쌀과 누룩으로 짧게 발효해 갓 빚은 듯한 막걸리를 만듭니다.',
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=280&fit=crop&q=80',
    lat: 35.57,
    lng: 126.856,
  },
  {
    id: 'igang',
    name: '전주 이강조',
    breweryKey: '전주 이강조',
    region: '전북 전주',
    regionId: 'jeonbuk',
    address: '전북특별자치도 전주시',
    rating: 4.6,
    summary: '배·생강·울금이 겹치는 전주 이강주의 향을 이어 갑니다.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=280&fit=crop&q=80',
    lat: 35.824,
    lng: 127.148,
  },
  {
    id: 'bokbunja',
    name: '고창 복분자촌',
    breweryKey: '고창 복분자촌',
    region: '전북 고창',
    regionId: 'jeonbuk',
    address: '전북특별자치도 고창군',
    rating: 4.8,
    summary: '고창 복분자의 진한 과실과 가벼운 떫음을 침출주로 담습니다.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=280&fit=crop&q=80',
    lat: 35.435,
    lng: 126.702,
  },
  {
    id: 'jukhyang',
    name: '담양 죽향도가',
    breweryKey: '담양 죽향도가',
    region: '전남 담양',
    regionId: 'jeonnam',
    address: '전라남도 담양군',
    rating: 4.7,
    summary: '대나무 숯 여과로 잡향을 걷고 단단한 바디를 남깁니다.',
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=280&fit=crop&q=80',
    lat: 35.321,
    lng: 126.985,
  },
  {
    id: 'andong',
    name: '안동 명인이네',
    breweryKey: '안동 명인이네',
    region: '경북 안동',
    regionId: 'gyeongbuk',
    address: '경상북도 안동시',
    rating: 4.5,
    summary: '안동 증류 전통을 일상 도수에 맞춰 구수한 곡향을 남깁니다.',
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=400&h=280&fit=crop&q=80',
    lat: 36.568,
    lng: 128.729,
  },
  {
    id: 'plum',
    name: '김천 자두원',
    breweryKey: '김천 자두원',
    region: '경북 김천',
    regionId: 'gyeongbuk',
    address: '경상북도 김천시',
    rating: 4.6,
    summary: '김천 자두의 단맛과 껍질 산미를 계절 병에 담습니다.',
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=280&fit=crop&q=80',
    lat: 36.14,
    lng: 128.113,
  },
  {
    id: 'busan',
    name: '부산 해창도가',
    breweryKey: '서귀포 월백양조',
    region: '경남 부산',
    regionId: 'gyeongnam',
    address: '부산광역시 영도구',
    rating: 4.4,
    summary: '바닷바람과 곡향이 만나는 경남의 작은 도가입니다.',
    image: 'https://images.unsplash.com/photo-1569529465841-df988a64df86?w=400&h=280&fit=crop&q=80',
    lat: 35.091,
    lng: 129.068,
  },
  {
    id: 'jeju',
    name: '서귀포 월백양조',
    breweryKey: '서귀포 월백양조',
    region: '제주 서귀포',
    regionId: 'jeju',
    address: '제주특별자치도 서귀포시',
    rating: 4.3,
    summary: '서귀포의 온화한 기후 아래 짧게 익혀 단맛이 또렷한 막걸리입니다.',
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=400&h=280&fit=crop&q=80',
    lat: 33.254,
    lng: 126.56,
  },
]

export function getBreweryById(id: string): BreweryPin | undefined {
  return BREWERIES.find((pin) => pin.id === id)
}
