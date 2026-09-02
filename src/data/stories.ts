export interface Story {
  id: number
  tag: string
  title: string
  region: string
}

const STORY_POOL: Omit<Story, 'id'>[] = [
  { tag: '양조장', title: '전통 장독대에서 숙성되는 깊은 맛', region: '전북 고창' },
  { tag: '장인', title: '3대째 이어온 가양주 제조 비법', region: '경기 양주' },
  { tag: '막걸리', title: '쌀과 누룩의 황금비율을 지키는 이유', region: '충남 아산' },
  { tag: '투어', title: '성수동 도심 속 양조장 체험 프로그램', region: '서울 성수' },
  { tag: '증류주', title: '오랜 시간 증류해 완성하는 깔끔한 풍미', region: '경북 안동' },
  { tag: '과실주', title: '제철 과일과 전통주의 조화', region: '전남 순천' },
]

export function generateStories(offset: number, count: number): Story[] {
  return Array.from({ length: count }, (_, i) => {
    const base = STORY_POOL[(offset + i) % STORY_POOL.length]
    return {
      ...base,
      id: offset + i + 1,
      title:
        offset + i >= STORY_POOL.length
          ? `${base.title} · ${Math.floor((offset + i) / STORY_POOL.length) + 1}`
          : base.title,
    }
  })
}
