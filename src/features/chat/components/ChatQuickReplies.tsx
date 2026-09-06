import { CHAT_QUICK_REPLIES } from '../data/chatPrompt'

interface ChatQuickRepliesProps {
  onPick: (text: string) => void
}

export default function ChatQuickReplies({ onPick }: ChatQuickRepliesProps) {
  return (
    <div className="chat-quick">
      {CHAT_QUICK_REPLIES.map((item) => (
        <button key={item} type="button" className="chat-quick__item" onClick={() => onPick(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}
