import type { PremiumGiftAd } from '../types/dailyEvent'

export const DAILY_EVENT_RULES = [
  '출석 스탬프와 응모는 계정당 하루 1회만 가능합니다.',
  '이벤트에서 나오는 쿠폰은 발급일로부터 무조건 7일간 유효하며, 일부 한정판 품목에는 적용이 불가할 수 있습니다.',
  '비정상적인 방법으로 응모된 경우 추첨 대상에서 영구 제외됩니다.',
  '이벤트를 공유하면 스탬프를 추가 지급합니다. 공유는 하루 1회입니다.',
]

export const PREMIUM_GIFT_ADS: PremiumGiftAd[] = [
  {
    id: 'andong-apple',
    name: '명인 안동소주 사과세트',
    price: 72000,
    perk: '설날 특별 무료 선물 포장',
    image: '/images/catalog/soju-1.svg',
  },
  {
    id: 'hansan-box',
    name: '한산 소곡주 명인 함',
    price: 98000,
    perk: '보자기 포장 + 한과 페어링',
    image: '/images/catalog/yakju-1.svg',
  },
]

export const STAMP_MAX = 7
export const COUPON_DAYS = 7
export const COUPON_AMOUNT = 5000
