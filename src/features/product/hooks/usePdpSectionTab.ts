import { useState } from 'react'

export type PdpSectionTab = 'detail' | 'reviews' | 'shipping'

export function usePdpSectionTab(initial: PdpSectionTab = 'detail') {
  const [tab, setTab] = useState<PdpSectionTab>(initial)
  return { tab, setTab }
}
