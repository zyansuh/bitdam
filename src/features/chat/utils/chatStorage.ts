import type { ChatThread } from '../types/chat'

const KEY = 'bitdam.chat.threads'

export function loadChatThreads(): ChatThread[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as ChatThread[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveChatThreads(threads: ChatThread[]): void {
  localStorage.setItem(KEY, JSON.stringify(threads))
}
