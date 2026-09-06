import { useState } from 'react'
import type { CorporateQuote } from '../types/corporate'

const initial: CorporateQuote = {
  company: '',
  contact: '',
  qty: '30',
  note: '',
  sent: false,
}

export function useCorporateQuote() {
  const [draft, setDraft] = useState<CorporateQuote>(initial)

  function patch(next: Partial<CorporateQuote>) {
    setDraft((prev) => ({ ...prev, ...next, sent: false }))
  }

  function send() {
    if (!draft.company.trim() || !draft.contact.trim()) return
    setDraft((prev) => ({ ...prev, sent: true }))
  }

  return { draft, patch, send }
}
