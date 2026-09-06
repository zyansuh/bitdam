import { BITDAM_SYSTEM_PROMPT, OPENAI_MODEL } from '../data/chatPrompt'
import type { ChatMessage } from '../types/chat'
import { pickChatProducts } from './pickChatProducts'

export function getOpenAiKey(): string {
  return (import.meta.env.VITE_OPENAI_API_KEY ?? '').trim()
}

function localReply(prompt: string): string {
  if (prompt.includes('막걸리')) {
    return '식사에는 호랑이배꼽 막걸리처럼 산미가 있는 탁주를 권합니다. 차갑게 내어 매콤한 안주와 드세요.'
  }
  if (prompt.includes('선물') || prompt.includes('세트')) {
    return '선물에는 한산 소곡주처럼 약주·청주 명인 에디션이 무난합니다. 성인 수령 확인이 필요합니다.'
  }
  if (prompt.includes('클래스') || prompt.includes('투어')) {
    return '시음·빚기 클래스는 /classes, 양조장 투어는 /breweries에서 날짜와 타임을 고를 수 있습니다.'
  }
  return '매콤한 안주에는 한산 소곡주처럼 단맛과 산미가 있는 약주가 잘 맞습니다. 16도 전후라 식사와 함께 마시기 좋습니다.'
}

export async function askBitdamModel(history: ChatMessage[], prompt: string): Promise<string> {
  const key = getOpenAiKey()
  if (!key) {
    return localReply(prompt)
  }

  const messages = [
    { role: 'system' as const, content: BITDAM_SYSTEM_PROMPT },
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
