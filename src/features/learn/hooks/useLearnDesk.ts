import { useState } from 'react'
import type { LearnCategoryId } from '../types/learn'
import type { LearnDraft } from '../types/learnDraft'
import { LEARN_ARTICLES } from '../data/learnArticles'
import { askLearnDraft } from '../services/askLearnDraft'
import { readLearnPick, writeLearnPick } from '../utils/learnPickStorage'
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
  const [editingSlug, setEditingSlug] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editLead, setEditLead] = useState('')
  const [editBody, setEditBody] = useState('')
  const [editOn, setEditOn] = useState('')
  const [pick, setPick] = useState(() => readLearnPick())

  async function queueDraft() {
    setBusy(true)
    setMessage('')
    try {
      const draft = await askLearnDraft(title.trim() || '술 상식', category, publishOn)
      upsertLearnDraft(draft)
      const next = readLearnDrafts()
      setDrafts(next)
      setPublishOn(nextOpenDay(next))
      openEdit(draft)
      setMessage(`${draft.publishOn} 예약. 아래 편집기에서 검수한 뒤 저장하세요.`)
    } catch {
      setMessage('초안을 만들지 못했습니다. 서버 OpenAI 키를 확인해 주세요.')
    } finally {
      setBusy(false)
    }
  }

  function openEdit(draft: LearnDraft) {
    setEditingSlug(draft.slug)
    setEditTitle(draft.title)
    setEditLead(draft.lead)
    setEditBody(draft.sections.flatMap((section) => [section.heading, ...section.paragraphs]).join('\n\n'))
    setEditOn(draft.publishOn)
  }

  function saveEdit() {
    const current = drafts.find((item) => item.slug === editingSlug)
    if (!current) return
    const chunks = editBody.split(/\n{2,}/).map((item) => item.trim()).filter(Boolean)
    const sections =
      chunks.length > 0
        ? chunks.map((chunk, index) => ({
            heading: index === 0 ? '검수한 본문' : `이어서 ${index + 1}`,
            paragraphs: [chunk],
          }))
        : current.sections
    upsertLearnDraft({
      ...current,
      title: editTitle.trim() || current.title,
      question: editTitle.trim() || current.question,
      lead: editLead.trim() || current.lead,
      publishOn: editOn || current.publishOn,
      sections,
    })
    setDrafts(readLearnDrafts())
    setMessage('초안을 저장했습니다.')
  }

  function dropDraft(slug: string) {
    removeLearnDraft(slug)
    const next = readLearnDrafts()
    setDrafts(next)
    if (editingSlug === slug) setEditingSlug('')
  }

  function savePick() {
    writeLearnPick(pick)
    setMessage(pick ? `오늘의 카드를 ${pick}로 고정했습니다.` : '오늘의 카드를 자동 회전으로 되돌렸습니다.')
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
    editingSlug,
    editTitle,
    setEditTitle,
    editLead,
    setEditLead,
    editBody,
    setEditBody,
    editOn,
    setEditOn,
    openEdit,
    saveEdit,
    pick,
    setPick,
    savePick,
    lessonSlugs: LEARN_ARTICLES.map((item) => item.slug),
  }
}
