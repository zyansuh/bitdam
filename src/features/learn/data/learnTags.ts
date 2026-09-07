import type { LearnCategoryId, LearnTag, LearnTagId, LearnTone } from '../types/learn'

export const LEARN_TAGS: LearnTag[] = [
  { id: 'three-min', label: '🍶 3분 양조상식', hint: '발효와 잔에서 바로 써먹는 짧은 원리' },
  { id: 'distill-story', label: '🔥 증류 이야기', hint: '원리와 양조장 공정 · 가정 제조 안내 없음' },
  { id: 'our-sool', label: '🌾 우리 술 이야기', hint: '쌀·누룩·이름 등 한국 술의 재료와 말' },
  { id: 'oak-story', label: '🪵 숙성 이야기', hint: '오크통과 시간이 맛에 남기는 자리' },
  { id: 'world-sool', label: '🌍 세계의 술', hint: '럼·진·보드카 등 다른 고장의 잔' },
]

export const LEARN_CATEGORY_DEFAULTS: Record<LearnCategoryId, { tag: LearnTagId; tone: LearnTone }> = {
  brew: { tag: 'three-min', tone: 'process' },
  distill: { tag: 'distill-story', tone: 'principle' },
  kinds: { tag: 'three-min', tone: 'process' },
  names: { tag: 'our-sool', tone: 'principle' },
  grain: { tag: 'our-sool', tone: 'process' },
  ferment: { tag: 'three-min', tone: 'principle' },
  'distill-deep': { tag: 'distill-story', tone: 'principle' },
  oak: { tag: 'oak-story', tone: 'principle' },
  world: { tag: 'world-sool', tone: 'principle' },
}

export function getLearnTag(id: LearnTagId): LearnTag | undefined {
  return LEARN_TAGS.find((item) => item.id === id)
}
