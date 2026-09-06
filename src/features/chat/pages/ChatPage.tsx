import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import SiteHeader from '../../../shared/components/navigation/SiteHeader'
import { navLinks } from '../../../data/navLinks'
import ChatComposer from '../components/ChatComposer'
import ChatMessageList from '../components/ChatMessageList'
import ChatQuickReplies from '../components/ChatQuickReplies'
import ChatThreadList from '../components/ChatThreadList'
import { useBitdamChat } from '../hooks/useBitdamChat'

export default function ChatPage() {
  const chat = useBitdamChat()

  return (
    <PageLayout>
      <SiteHeader links={navLinks} />
      <main className="chat-page">
        <ChatThreadList
          threads={chat.threads}
          activeId={chat.activeId}
          onSelect={chat.setActiveId}
          onCreate={chat.startThread}
        />
        <section className="chat-main">
          <header className="chat-main__head">
            <div>
              <h1>빚담 추천 AI</h1>
              <p>{chat.hasKey ? 'OpenAI로 추천 중입니다.' : '키 없이 로컬 추천으로 동작합니다. .env에 VITE_OPENAI_API_KEY를 넣으면 모델이 답합니다.'}</p>
            </div>
          </header>
          <ChatMessageList messages={chat.active.messages} />
          <ChatQuickReplies onPick={(text) => void chat.send(text)} />
          {chat.error ? <p className="chat-error">{chat.error}</p> : null}
          <ChatComposer
            value={chat.draft}
            onChange={chat.setDraft}
            onSend={() => void chat.send(chat.draft)}
            busy={chat.busy}
          />
        </section>
      </main>
      <Footer />
    </PageLayout>
  )
}
