import type { ChatThread } from '../types/chat'

interface ChatThreadListProps {
  threads: ChatThread[]
  activeId: string
  onSelect: (id: string) => void
  onCreate: () => void
}

export default function ChatThreadList({ threads, activeId, onSelect, onCreate }: ChatThreadListProps) {
  return (
    <aside className="chat-aside">
      <div className="chat-aside__head">
        <h2>대화 내역</h2>
        <button type="button" className="chat-aside__new" onClick={onCreate}>
          + 새 대화
        </button>
      </div>
      <ul className="chat-aside__list">
        {threads.map((thread) => (
          <li key={thread.id}>
            <button
              type="button"
              className={`chat-aside__item${thread.id === activeId ? ' chat-aside__item--on' : ''}`}
              onClick={() => onSelect(thread.id)}
            >
              <span>{thread.title}</span>
              <time>{thread.updatedAt.slice(0, 10)}</time>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
