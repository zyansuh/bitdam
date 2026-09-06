import {
  CUSTOM_ABVS,
  CUSTOM_BASE_PRICE,
  CUSTOM_BORDERS,
  CUSTOM_OCCASIONS,
  CUSTOM_SPIRITS,
  CUSTOM_TEMPLATES,
  CUSTOM_VOLUME,
} from '../data/customOptions'
import type { CustomLabelDraft, CustomOption, CustomQuote } from '../types/customLabel'

function findOption(list: CustomOption[], id: string) {
  return list.find((item) => item.id === id)
}

export function buildCustomQuote(draft: CustomLabelDraft): CustomQuote {
  const lines: CustomQuote['lines'] = []
  const spirit = findOption(CUSTOM_SPIRITS, draft.spiritId)
  const abv = findOption(CUSTOM_ABVS, draft.abvId)
  const template = findOption(CUSTOM_TEMPLATES, draft.templateId)
  const border = findOption(CUSTOM_BORDERS, draft.borderId)
  const occasion = findOption(CUSTOM_OCCASIONS, draft.occasionId)

  const base = CUSTOM_BASE_PRICE + (spirit?.extra ?? 0)
  const spiritLabel = spirit?.label ?? '소주'
  lines.push({
    label: `기념주 오리지널 ${spiritLabel}-${CUSTOM_VOLUME}`,
    amount: base,
  })

  if (template && template.extra !== 0) {
    lines.push({ label: `라벨 템플릿 ${template.label}`, amount: template.extra })
  }

  if (abv && abv.extra !== 0) {
    lines.push({ label: `도수 ${abv.label}`, amount: abv.extra })
  }

  if (border) {
    lines.push({ label: `라벨 자수 테두리 ${border.label}`, amount: border.extra })
  }

  if (draft.engraveName.trim() || draft.engraveMessage.trim()) {
    lines.push({ label: '나만의 이름 · 멘트 새기기', amount: 3000 })
  }

  if (occasion?.id === 'own') {
    lines.push({ label: '단독 제작 조율', amount: 2000 })
  }

  return {
    lines,
    total: lines.reduce((sum, line) => sum + line.amount, 0),
  }
}
