import { useMemo, useState } from 'react'
import { GIFT_SKINS, GIFT_WRAPS } from '../data/giftOptions'
import type { GiftDraft, GiftStepId } from '../types/gift'
import { buildGiftTotal } from '../utils/giftQuote'

const initialDraft: GiftDraft = {
  step: 1,
  productId: null,
  qty: 1,
  skinId: GIFT_SKINS[0].id,
  message:
    '고마운 마음을 한 병에 담았습니다. 오늘 식탁에 빚담의 전통주와 함께 따뜻한 이야기를 나눠 주세요.',
  wrapId: GIFT_WRAPS[0].id,
  paid: false,
}

function canEnter(step: GiftStepId, draft: GiftDraft) {
  if (step === 1) return true
  if (step === 2) return draft.productId != null
  return draft.productId != null && draft.message.trim().length > 0
}

export function useGiftFlow() {
  const [draft, setDraft] = useState<GiftDraft>(initialDraft)
  const total = useMemo(() => buildGiftTotal(draft), [draft])

  function patch(next: Partial<GiftDraft>) {
    setDraft((prev) => ({ ...prev, ...next, paid: false }))
  }

  function goTo(step: GiftStepId) {
    setDraft((prev) => (canEnter(step, prev) ? { ...prev, step } : prev))
  }

  function next() {
    setDraft((prev) => {
      const step = Math.min(3, prev.step + 1) as GiftStepId
      return canEnter(step, prev) ? { ...prev, step } : prev
    })
  }

  function prev() {
    setDraft((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) as GiftStepId }))
  }

  function pay() {
    if (!canEnter(3, draft)) return
    setDraft((prev) => ({ ...prev, paid: true }))
  }

  return {
    draft,
    total,
    canEnter: (step: GiftStepId) => canEnter(step, draft),
    patch,
    goTo,
    next,
    prev,
    pay,
  }
}
