import type { LearnCategory } from '../types/learn'

export const LEARN_CATEGORIES: LearnCategory[] = [
  {
    id: 'brew',
    kicker: '빚는 이야기',
    title: '술 만드는 법 · 양조 기초',
    lead: '쌀과 물, 누룩이 만나 탁주가 되기까지의 순서와 원리를 짧게 익힙니다.',
  },
  {
    id: 'distill',
    kicker: '증류 이야기',
    title: '증류주 이야기',
    lead: '발효주를 한 번 더 끓여 모으는 증류와 숙성의 기본을 공부합니다.',
  },
  {
    id: 'kinds',
    kicker: '술 상식',
    title: '술 종류와 차이',
    lead: '탁주·약주·소주·과실주·리큐르가 어디서 갈라지는지 비교합니다.',
  },
  {
    id: 'names',
    kicker: '술 이야기',
    title: '이름과 역사로 보는 술',
    lead: '이름이 붙은 이유와, 아무 술에나 붙일 수 없는 지명을 알아둡니다.',
  },
]
