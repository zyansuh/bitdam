import type { LearnCategoryId } from '../types/learn'
import { LEARN_CATEGORY_DEFAULTS } from '../data/learnTags'
import { parseLearnDraftJson } from '../utils/parseLearnDraft'
import type { LearnDraft } from '../types/learnDraft'
import { getOpenAiKey } from '../../chat/services/askBitdamModel'

function localDraft(title: string, category: LearnCategoryId, publishOn: string): LearnDraft {
  const tone = LEARN_CATEGORY_DEFAULTS[category].tone
  const text = JSON.stringify({
    title,
    lead: `${title}을 빚담 카드 한 장으로 정리합니다.`,
    sections:
      tone === 'principle'
        ? [
            { heading: '원리', paragraphs: [`${title}의 핵심은 끓는점·미생물·나무가 하는 일을 나누어 보는 것입니다.`] },
            { heading: '양조장 공정', paragraphs: ['허가된 설비와 일지 위에서 그 원리가 반복됩니다. 투어로 보는 장면입니다.'] },
            { heading: '면허와 안전', paragraphs: ['가정에서 증류·고도수 제조를 따라 하지 않습니다. 원리와 시음 안내만 남깁니다.'] },
          ]
        : [
            { heading: '재료', paragraphs: [`${title}을 가르는 첫 변수는 원료와 물, 누룩입니다.`] },
            { heading: '도가의 과정', paragraphs: ['찌고 식히고 섞고 기다리는 리듬이 잔을 만듭니다. 판매 레시피가 아닙니다.'] },
            { heading: '실패 포인트', paragraphs: ['온도와 위생을 놓치면 잡내와 신맛이 먼저 옵니다. 탐방과 시음의 힌트로 읽습니다.'] },
          ],
    takeaways: ['카드 한 장으로 질문을 남깁니다.', '따라 만들기보다 잔을 읽습니다.', '공개일은 예약 날짜에 맞춰 열립니다.'],
  })
  return parseLearnDraftJson(text, title, category, publishOn, 'local')
}

export async function askLearnDraft(
  title: string,
  category: LearnCategoryId,
  publishOn: string,
): Promise<LearnDraft> {
  const key = getOpenAiKey()
  const tone = LEARN_CATEGORY_DEFAULTS[category].tone
  if (!key) {
    return localDraft(title, category, publishOn)
  }

  const system =
    tone === 'principle'
      ? '당신은 빚담의 술 상식 에디터입니다. 증류·고도수 제조의 재료량·온도·따라하기 절차를 절대 적지 마세요. 원리와 양조장 공정, 면허·안전만 JSON으로 씁니다.'
      : '당신은 빚담의 술 상식 에디터입니다. 가정 제조·판매 레시피가 아니라 재료, 도가의 과정, 실패 포인트를 JSON으로 씁니다.'

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.4,
      messages: [
        { role: 'system', content: system },
        {
          role: 'user',
          content: `제목: ${title}\n분류: ${category}\nJSON만 출력: {"title","lead","sections":[{"heading","paragraphs":["",""]}],"takeaways":["","",""]}`,
        },
      ],
    }),
  })

  if (!response.ok) {
    return localDraft(title, category, publishOn)
  }

  const data = (await response.json()) as { choices?: { message?: { content?: string } }[] }
  const content = data.choices?.[0]?.message?.content?.trim() ?? ''
  return parseLearnDraftJson(content, title, category, publishOn, 'ai')
}
