import type { ChatMessage } from '../types/chat'
import ChatProductCard from './ChatProductCard'

interface ChatMessageListProps {
  messages: ChatMessage[]
}

export default function ChatMessageList({ messages }: ChatMessageListProps) {
  return (
    <div className="chat-stream">
      {messages.map((message) => (
        <article
          key={message.id}
          className={message.role === 'user' ? 'chat-bubble chat-bubble--user' : 'chat-bubble chat-bubble--bot'}
        >
          <p>{message.text}</p>
          {message.products?.map((product) => (
            <ChatProductCard key={product.id} product={product} />
          ))}
        </article>
      ))}
    </div>
  )
}
