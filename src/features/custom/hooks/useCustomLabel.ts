import { useMemo, useState } from 'react'
import type { CustomLabelDraft, CustomStepId } from '../types/customLabel'
import { buildCustomQuote } from '../utils/customQuote'

const initialDraft: CustomLabelDraft = {
  step: 1,
  occasionId: 'holiday',
  templateId: 'classic',
  line1: '김아빠 환갑기념',
  line2: '인생은 육십부터',
  spiritId: 'soju',
  abvId: '19',
  borderId: 'ivory',
  engraveName: '',
  engraveMessage: '',
  reserved: false,
}

function canEnter(step: CustomStepId, draft: CustomLabelDraft) {
  if (step === 1) return true
  if (step === 2) return Boolean(draft.occasionId)
  if (step === 3) return Boolean(draft.templateId && draft.line1.trim())
  return Boolean(draft.spiritId && draft.abvId && draft.borderId)
}

export function useCustomLabel() {
  const [draft, setDraft] = useState<CustomLabelDraft>(initialDraft)
  const quote = useMemo(() => buildCustomQuote(draft), [draft])

  function patch(next: Partial<CustomLabelDraft>) {
    setDraft((prev) => ({ ...prev, ...next, reserved: false }))
  }

  function goTo(step: CustomStepId) {
    setDraft((prev) => (canEnter(step, prev) ? { ...prev, step } : prev))
  }

  function next() {
    setDraft((prev) => {
      const step = Math.min(4, prev.step + 1) as CustomStepId
      return canEnter(step, prev) ? { ...prev, step } : prev
    })
  }

  function prev() {
    setDraft((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) as CustomStepId }))
  }

  function reserve() {
    if (!draft.engraveName.trim() && !draft.engraveMessage.trim()) return
    setDraft((prev) => ({ ...prev, reserved: true }))
  }

  return {
    draft,
    quote,
    canEnter: (step: CustomStepId) => canEnter(step, draft),
    patch,
    goTo,
    next,
    prev,
    reserve,
  }
}
