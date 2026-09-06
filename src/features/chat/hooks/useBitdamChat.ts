import { useMemo, useState } from 'react'
import type { ChatMessage, ChatThread } from '../types/chat'
import { askBitdamModel, attachProducts, getOpenAiKey } from '../utils/askBitdamModel'
import { loadChatThreads, saveChatThreads } from '../utils/chatStorage'

function stamp() {
  return new Date().toISOString()
}

function createThread(): ChatThread {
  return {
    id: crypto.randomUUID(),
    title: '새 대화',
    updatedAt: stamp(),
    messages: [
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: '빚담 추천 AI입니다. 안주 페어링, 선물, 양조장 투어를 물어보세요.',
      },
    ],
  }
}

export function useBitdamChat() {
  const [threads, setThreads] = useState<ChatThread[]>(() => {
    const stored = loadChatThreads()
    return stored.length > 0 ? stored : [createThread()]
  })
  const [activeId, setActiveId] = useState(threads[0].id)
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const hasKey = Boolean(getOpenAiKey())

  const active = useMemo(
    () => threads.find((item) => item.id === activeId) ?? threads[0],
    [threads, activeId],
  )

  function persist(next: ChatThread[]) {
    setThreads(next)
    saveChatThreads(next)
  }

  function startThread() {
    const thread = createThread()
    persist([thread, ...threads])
    setActiveId(thread.id)
  }

  async function send(text: string) {
    const prompt = text.trim()
    if (!prompt || busy) return
    setDraft('')
    setError('')
    setBusy(true)
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: 'user', text: prompt }
    const pending = threads.map((thread) =>
      thread.id === active.id
        ? {
            ...thread,
            title: thread.title === '새 대화' ? prompt.slice(0, 24) : thread.title,
            updatedAt: stamp(),
            messages: [...thread.messages, userMsg],
          }
        : thread,
    )
    persist(pending)

    try {
      const history = pending.find((item) => item.id === active.id)?.messages ?? []
      const reply = await askBitdamModel(history, prompt)
      const assistant: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: reply,
        products: attachProducts(reply),
      }
      persist(
        pending.map((thread) =>
          thread.id === active.id ? { ...thread, updatedAt: stamp(), messages: [...thread.messages, assistant] } : thread,
        ),
      )
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : '답변을 만들지 못했습니다.')
    } finally {
      setBusy(false)
    }
  }

  return { threads, active, activeId, setActiveId, startThread, draft, setDraft, send, busy, error, hasKey }
}
