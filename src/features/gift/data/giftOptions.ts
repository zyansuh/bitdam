import type { GiftSkin, GiftStepId, GiftWrap } from '../types/gift'
import skinCelebrate from '../../../assets/gift/skin-celebrate.png'
import skinClassic from '../../../assets/gift/skin-classic.png'
import skinModern from '../../../assets/gift/skin-modern.png'
import skinThanks from '../../../assets/gift/skin-thanks.png'
import wrapBox from '../../../assets/gift/wrap-box.png'
import wrapHanji from '../../../assets/gift/wrap-hanji.png'
import wrapRoyal from '../../../assets/gift/wrap-royal.png'

export const GIFT_STEPS: { id: GiftStepId; title: string }[] = [
  { id: 1, title: '상품 선택' },
  { id: 2, title: '메시지 작성' },
  { id: 3, title: '결제하기' },
]

export const GIFT_SKINS: GiftSkin[] = [
  { id: 'classic', label: '고급스러운 전통 무늬', image: skinClassic, hint: '단청 금박 테두리' },
  { id: 'modern', label: '현대적인 감각', image: skinModern, hint: '여백과 얇은 금선' },
  { id: 'celebrate', label: '따뜻한 축하 카드', image: skinCelebrate, hint: '매화와 복숭아빛' },
  { id: 'thanks', label: '감사한 마음을 전하며', image: skinThanks, hint: '먹선 잎사귀' },
]

export const GIFT_WRAPS: GiftWrap[] = [
  {
    id: 'royal',
    label: '황실 보자기 포장',
    extra: 5000,
    image: wrapRoyal,
    detail: '진홍·금색 비단 보자기로 사각형 선물을 묶습니다. 명절·어른 선물용입니다.',
  },
  {
    id: 'box',
    label: '전통 수제 지함 박스',
    extra: 3000,
    image: wrapBox,
    detail: '옻칠 나무 지함에 담아 뚜껑을 닫습니다. 병 보관과 이동에 유리합니다.',
  },
  {
    id: 'hanji',
    label: '친환경 한지 포장 패키지',
    extra: 2000,
    image: wrapHanji,
    detail: '닥나무 한지와 삼베 끈으로 감쌉니다. 가벼운 일상 선물·친환경 포장입니다.',
  },
]

export const GIFT_MESSAGE_MAX = 300
