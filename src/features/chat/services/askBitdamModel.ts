import { OPENAI_MODEL } from '../data/chatPrompt'
import type { ChatMessage } from '../types/chat'
import { pickChatProducts } from '../utils/pickChatProducts'
import { buildBitdamSystemPrompt } from './buildPrompt'

export function getOpenAiKey(): string {
  return (import.meta.env.VITE_OPENAI_API_KEY ?? '').trim()
}

function localReply(prompt: string): string {
  if (prompt.includes('미성년') || prompt.includes('19세')) {
    return '빚담에서는 만 19세 이상에게만 주류를 추천하고 있어요. 대신 전통주 문화나 양조장 이야기는 알려드릴 수 있어요.'
  }
  if (prompt.includes('파손') || prompt.includes('깨져')) {
    return '파손된 상품과 포장재는 바로 버리지 말고 사진으로 남겨 주세요. 그다음 고객센터에서 처리 요청해 주세요. 실시간 주문 상태는 제가 확인할 수 없어요.'
  }
  if (prompt.includes('환불')) {
    return '환불 반영 시점은 결제수단과 결제사에 따라 달라질 수 있어요. 정확한 상태는 주문내역의 환불 상태를 확인해 주세요. 제가 환불을 직접 처리할 수는 없어요.'
  }
  if (prompt.includes('주소') || prompt.includes('배송지')) {
    return '아직 배송 전이라면 배송지 변경을 요청할 수 있어요. 이미 배송이 시작됐다면 빚담에서 주소를 바꿀 수 없고, 배송조회에서 택배사에 문의해 주세요.'
  }
  if (prompt.includes('취소')) {
    return '결제완료·상품준비중이라면 원칙적으로 취소 요청이 가능해요. 이미 배송이 시작됐다면 취소할 수 없고, 수령 후 반품 가능 여부를 확인해 주세요. 실시간 주문 상태는 주문내역에서 봐야 해요.'
  }
  if (prompt.includes('빨리') || prompt.includes('오늘') || prompt.includes('당일')) {
    return '상품과 양조장에 따라 출고 일정이 달라질 수 있어요. 특정 도착일을 보장할 수는 없고, 해당 상품의 배송 안내를 확인해 주세요.'
  }
  if (prompt.includes('막걸리')) {
    return '식사에는 호랑이배꼽 막걸리처럼 산미가 있는 탁주를 권합니다. 차갑게 내어 매콤한 안주와 드세요.'
  }
  if (prompt.includes('선물') || prompt.includes('세트')) {
    return '선물에는 한산 소곡주처럼 약주·청주 명인 에디션이 무난합니다. 성인 수령 확인이 필요합니다.'
  }
  if (prompt.includes('클래스') || prompt.includes('투어')) {
    return '시음·빚기 클래스는 /classes, 양조장 지도는 /breweries, 권역별 예약은 /tours에서 날짜와 타임을 고를 수 있습니다.'
  }
  return '매콤한 안주에는 한산 소곡주처럼 단맛과 산미가 있는 약주가 잘 맞습니다. 16도 전후라 식사와 함께 마시기 좋습니다.'
}

export async function askBitdamModel(history: ChatMessage[], prompt: string): Promise<string> {
  const key = getOpenAiKey()
  if (!key) {
    return localReply(prompt)
  }

  const messages = [
    { role: 'system' as const, content: buildBitdamSystemPrompt() },
    ...history.map((item) => ({ role: item.role, content: item.text })),
    { role: 'user' as const, content: prompt },
  ]

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      temperature: 0.6,
      messages,
    }),
  })

  if (!response.ok) {
    throw new Error('OpenAI 응답에 실패했습니다. 키와 모델 권한을 확인해 주세요.')
  }

  const data = (await response.json()) as { choices?: { message?: { content?: string } }[] }
  return data.choices?.[0]?.message?.content?.trim() || localReply(prompt)
}

export function attachProducts(text: string) {
  return pickChatProducts(text)
}
