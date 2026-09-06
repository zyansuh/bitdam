import type { LimitedEdition } from '../types/limited'

export const LIMITED_EDITION: LimitedEdition = {
  title: '조옥화 가문 × 작가 민서 한정판 에디션',
  master: '명인 조옥화 여사 가문',
  artist: '캘리그라피 일러스트 민서',
  origin: 78000,
  sale: 62000,
  stock: 500,
  daysLeft: 3,
  abv: 43,
  volume: '500ml',
  ingredients: '안동 쌀, 누룩, 지하암반수',
  notes: '참나무 잔향, 은은한 곡물, 긴 여운',
  tasting:
    '코에서는 구운 곡물과 마른 대추, 입안에서는 묵직한 바디와 중간 단맛, 산미는 낮아 밤에 천천히 마시기 좋습니다. 카탈로그에 없는 수상 경력은 적지 않았습니다.',
  summary: '바디감 묵직함 · 단맛 보통 · 산미 적음',
  axes: [
    { id: 'body', label: '바디', value: 86 },
    { id: 'sweet', label: '단맛', value: 52 },
    { id: 'acid', label: '산미', value: 28 },
    { id: 'aroma', label: '향', value: 74 },
    { id: 'finish', label: '여운', value: 80 },
  ],
  fundShare: 15,
}
