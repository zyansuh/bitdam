import type { SubscribeBox, SubscribeFaq, SubscribePlan } from '../types/subscribe'

export const SUBSCRIBE_PLANS: SubscribePlan[] = [
  {
    id: 'light',
    name: 'Light',
    price: 29000,
    perks: ['월 1병 큐레이션', '페어링 카드', '무료 한랭 배송'],
  },
  {
    id: 'signature',
    name: 'Signature',
    price: 49000,
    popular: true,
    perks: ['월 2병 명인 큐레이션', '전통 안주 페어링', '가이드북', '우선 예약'],
  },
  {
    id: 'noblesse',
    name: 'Noblesse',
    price: 99000,
    perks: ['프리미엄 2~3병', '소믈리에 라이브', '각인 잔', '기업 선물 할인'],
  },
]

export const SUBSCRIBE_BOXES: SubscribeBox[] = [
  {
    id: 'aug',
    month: '8월 서늘한 광주',
    title: '동해 숨결 맑은 복숭아 에디션',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=900&h=560&fit=crop&q=80',
  },
  {
    id: 'jul',
    month: '7월 한산의 밤',
    title: '소곡주 명인 여름 에디션',
    image: 'https://images.unsplash.com/photo-1551024601-b78d007933a0?w=900&h=560&fit=crop&q=80',
  },
  {
    id: 'jun',
    month: '6월 과수원 길',
    title: '못난이 자두 · 오미자 에디션',
    image: 'https://images.unsplash.com/photo-1567696912547-6a89454f4b0a?w=900&h=560&fit=crop&q=80',
  },
]

export const SUBSCRIBE_FAQS: SubscribeFaq[] = [
  { q: '언제든 건너뛰거나 해지할 수 있나요?', a: '다음 회차 출고 3일 전까지 마이페이지에서 건너뛰기·해지가 가능합니다.' },
  { q: '주종을 고를 수 있나요?', a: 'Signature부터 선호 주종을 남기면 큐레이션에 반영합니다. 카탈로그 밖 상품은 넣지 않습니다.' },
  { q: '미성년자도 구독할 수 있나요?', a: '주류 구독은 만 19세 이상만 가능합니다.' },
]
