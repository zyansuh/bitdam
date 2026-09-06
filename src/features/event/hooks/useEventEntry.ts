import { useState } from 'react'

export interface EventEntryDraft {
  name: string
  orderNo: string
  wish: string
  submitted: boolean
}

const initial: EventEntryDraft = {
  name: '',
  orderNo: '',
  wish: '',
  submitted: false,
}

export function useEventEntry() {
  const [draft, setDraft] = useState<EventEntryDraft>(initial)

  function patch(next: Partial<EventEntryDraft>) {
    setDraft((prev) => ({ ...prev, ...next, submitted: false }))
  }

  function submit() {
    if (!draft.name.trim() || draft.orderNo.trim().length < 8 || !draft.wish.trim()) return
    setDraft((prev) => ({ ...prev, submitted: true }))
  }

  return { draft, patch, submit }
}
