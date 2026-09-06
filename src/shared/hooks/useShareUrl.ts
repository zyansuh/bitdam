import { useState } from 'react'
import { shareCurrentUrl } from '../utils/shareUrl'

export function useShareUrl(onShared?: () => void) {
  const [done, setDone] = useState(false)

  async function share() {
    const ok = await shareCurrentUrl()
    if (!ok) return
    onShared?.()
    setDone(true)
  }

  return { done, share }
}
