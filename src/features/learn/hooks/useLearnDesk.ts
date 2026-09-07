import { useState } from 'react'
import type { LearnCategoryId } from '../types/learn'
import type { LearnDraft } from '../types/learnDraft'
import { askLearnDraft } from '../services/askLearnDraft'
import { readLearnDrafts, removeLearnDraft, todayKey, upsertLearnDraft } from '../utils/learnDraftStorage'

function nextOpenDay(drafts: LearnDraft[]): string {
  const used = new Set(drafts.map((item) => item.publishOn))
  const date = new Date()
  for (let step = 0; step < 400; step += 1) {
    const key = todayKey(date)
    if (!used.has(key)) return key
    date.setDate(date.getDate() + 1)
  }
  return todayKey()
}

export function useLearnDesk() {
  const [drafts, setDrafts] = useState(() => readLearnDrafts())
  const [title, setTitle] = useState('효모는 향을 어디에 남길까?')
  const [category, setCategory] = useState<LearnCategoryId>('ferment')
  const [publishOn, setPublishOn] = useState(() => nextOpenDay(readLearnDrafts()))
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  async function queueDraft() {
    setBusy(true)
    setMessage('')
    try {
      const draft = await askLearnDraft(title.trim() || '술 상식', category, publishOn)
      upsertLearnDraft(draft)
      const next = readLearnDrafts()
      setDrafts(next)
      setPublishOn(nextOpenDay(next))
      setMessage(`${draft.publishOn}에 공개되도록 예약했습니다.`)
    } catch {
      setMessage('초안을 만들지 못했습니다. 제목과 키를 확인해 주세요.')
    } finally {
      setBusy(false)
    }
  }

  function dropDraft(slug: string) {
    removeLearnDraft(slug)
    const next = readLearnDrafts()
    setDrafts(next)
  }

  return {
    drafts,
    title,
    setTitle,
    category,
    setCategory,
    publishOn,
    setPublishOn,
    busy,
    message,
    queueDraft,
    dropDraft,
  }
}
