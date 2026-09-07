import type { GiftSkin, GiftStepId, GiftWrap } from '../types/gift'

export const GIFT_STEPS: { id: GiftStepId; title: string }[] = [
  { id: 1, title: '상품 선택' },
  { id: 2, title: '메시지 작성' },
  { id: 3, title: '결제하기' },
]

export const GIFT_SKINS: GiftSkin[] = [
  { id: 'classic', label: '고급스러운 전통 무늬' },
  { id: 'modern', label: '현대적인 감각' },
  { id: 'celebrate', label: '따뜻한 축하 카드' },
  { id: 'thanks', label: '감사한 마음을 전하며' },
]

export const GIFT_WRAPS: GiftWrap[] = [
  { id: 'royal', label: '황실 보자기 포장', extra: 5000 },
  { id: 'box', label: '전통 수제 지함 박스', extra: 3000 },
  { id: 'hanji', label: '친환경 한지 포장 패키지', extra: 2000 },
]

export const GIFT_MESSAGE_MAX = 300
