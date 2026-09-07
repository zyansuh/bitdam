import type { CorporateSet, CorporateTier } from '../types/corporate'

export const CORPORATE_SETS: CorporateSet[] = [
  {
    id: 'hansan',
    name: '명인 한산 가문 시그니처 세트',
    contents: '한산 소곡주 + 약주 미니 + 목함 + 잔 2',
    priceFrom: 55000,
    priceTo: 89000,
    image: '/images/catalog/soju-1.svg',
  },
  {
    id: 'andong',
    name: '안동 명가 증류 세트',
    contents: '안동소주 + 잔 2 + 오동 트레이',
    priceFrom: 62000,
    priceTo: 98000,
    image: '/images/catalog/yakju-1.svg',
  },
  {
    id: 'fruit',
    name: '못난이 과실 감사 세트',
    contents: '과실주 2종 + 보자기 + 한과',
    priceFrom: 42000,
    priceTo: 72000,
    image: '/images/catalog/fruit-1.svg',
  },
]

export const CORPORATE_TIERS: CorporateTier[] = [
  { qty: '30세트 이상', benefit: '10% 즉시 할인 + 한 곳 무료 배송' },
  { qty: '50세트 이상', benefit: '20% 할인 + 개별 주소 배송 + 로고 스티커' },
  { qty: '100세트 이상', benefit: '35% 할인 + 프리미엄 목함 레이저 각인' },
]
