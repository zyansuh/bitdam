import type { LearnTone } from '../types/learn'

export const LEARN_TONE_COPY: Record<LearnTone, { label: string; body: string }> = {
  principle: {
    label: '원리 · 양조장 공정',
    body: '면허·화기·고도수가 걸린 항목입니다. 가정에서 따라 만드는 법이 아니라, 도가와 증류소가 왜 그렇게 하는지를 소개합니다.',
  },
  process: {
    label: '재료 · 과정 · 실패 포인트',
    body: '도가에서 재료가 술로 바뀌는 순서를 공부합니다. 판매·가정 제조 매뉴얼이 아니며, 실패 포인트는 시음과 탐방을 읽기 위한 힌트입니다.',
  },
}
