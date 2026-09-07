import { useState } from 'react'

export interface IrInquiry {
  org: string
  email: string
  sent: boolean
}

const initial: IrInquiry = { org: '', email: '', sent: false }

export function useIrInquiry() {
  const [draft, setDraft] = useState<IrInquiry>(initial)

  function patch(next: Partial<IrInquiry>) {
    setDraft((prev) => ({ ...prev, ...next, sent: false }))
  }

  function send() {
    if (!draft.org.trim() || !draft.email.includes('@')) return
    setDraft((prev) => ({ ...prev, sent: true }))
  }

  return { draft, patch, send }
}
