import type { CustomColorOption, CustomOption, CustomStepId } from '../types/customLabel'

export const CUSTOM_STEPS: { id: CustomStepId; title: string; hint: string }[] = [
  { id: 1, title: '기념일/용도 선택', hint: '생일, 환갑, 선물용' },
  { id: 2, title: '라벨 템플릿 선택', hint: '전통 무늬부터 모던 라인' },
  { id: 3, title: '술 커스텀 옵션', hint: '도수 · 주종 · 자수 테두리' },
  { id: 4, title: '문구 입력 & 결제', hint: '나만의 이름 새기기' },
]

export const CUSTOM_OCCASIONS: CustomOption[] = [
  { id: 'birthday', label: '생일/기념일', extra: 0 },
  { id: 'hwangap', label: '환갑/칠순/팔순', extra: 0 },
  { id: 'wedding', label: '결혼/약혼/답례', extra: 0 },
  { id: 'holiday', label: '명절/선물/감사', extra: 0 },
  { id: 'own', label: '나만의 제작', extra: 0 },
]

export const CUSTOM_TEMPLATES: CustomOption[] = [
  { id: 'classic', label: '전통 무늬', extra: 0 },
  { id: 'modern', label: '모던 라인', extra: 0 },
  { id: 'foil', label: '금박 예식', extra: 4000 },
  { id: 'hangul', label: '담백 한글', extra: 0 },
  { id: 'sansu', label: '산수화', extra: 2000 },
  { id: 'minimal', label: '미니멀', extra: 0 },
]

export const CUSTOM_SPIRITS: CustomOption[] = [
  { id: 'soju', label: '소주', extra: 0 },
  { id: 'yakju', label: '약주', extra: 2000 },
  { id: 'fruit', label: '과실주', extra: 3000 },
]

export const CUSTOM_ABVS: CustomOption[] = [
  { id: '12', label: '12도', extra: 0 },
  { id: '16', label: '16도', extra: 0 },
  { id: '19', label: '19도', extra: 1000 },
  { id: '25', label: '25도', extra: 2000 },
  { id: '40', label: '40도', extra: 4000 },
]

export const CUSTOM_BORDERS: CustomColorOption[] = [
  { id: 'ivory', label: '아이보리', extra: 5000, hex: '#f4efe6' },
  { id: 'gold', label: '골드', extra: 5000, hex: '#c5994c' },
  { id: 'forest', label: '딥그린', extra: 5000, hex: '#1c3a2e' },
  { id: 'ink', label: '먹색', extra: 5000, hex: '#1a1a1a' },
]

export const CUSTOM_BASE_PRICE = 28000
export const CUSTOM_VOLUME = '500ml'

export const CUSTOM_BOTTLE_NOTE =
  '막걸리는 탄산 내압으로 PET만 가능해서 기념주 도자기 병에서는 빼 두었습니다.'

export const CUSTOM_MESSAGE_HINTS = [
  '결혼 답례품으로 두 사람의 이름을 남겨 보세요.',
  '생일 감사 인사를 한 줄로 새길 수 있어요.',
  '명절 선물에는 가족과 해의 이름을 담아 보세요.',
  '환갑·칠순에는 축원의 문장을 새기면 오래 남습니다.',
]
