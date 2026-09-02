import type { ReviewAttributeKey } from '../../../shared/types/review'

export const REVIEW_NOTE_TAGS = [
  '사과향 가득',
  '상콤한',
  '새콤달콤',
  '달콤한',
  '청량감',
  '곡향',
  '산미',
  '묵직한',
  '깔끔한',
  '가성비 좋은',
] as const

export const REVIEW_ATTRIBUTES: { key: ReviewAttributeKey; label: string; hint: string }[] = [
  { key: 'taste', label: '맛', hint: '단맛/산미의 균형' },
  { key: 'aroma', label: '향', hint: '과실향 및 무게' },
  { key: 'swallow', label: '목넘김', hint: '부드러움' },
  { key: 'value', label: '가성비', hint: '가격 대비 만족도' },
]
