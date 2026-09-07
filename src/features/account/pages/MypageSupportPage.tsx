import MypageLayout from '../components/MypageLayout'
import { useSupportInbox } from '../hooks/useSupportInbox'

export default function MypageSupportPage() {
  const { list, title, setTitle, body, setBody, submit } = useSupportInbox()

  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">1:1 고객센터</h1>
        <form
          className="account-form"
          onSubmit={(event) => {
            event.preventDefault()
            submit()
          }}
        >
          <label className="account-field">
            <span className="account-field__label">제목</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="account-field">
            <span className="account-field__label">문의 내용</span>
            <textarea rows={5} value={body} onChange={(event) => setBody(event.target.value)} />
          </label>
          <button type="submit" className="account-save">
            문의 등록
          </button>
        </form>
        <ul className="account-list">
          {list.length === 0 ? <li className="account-list__meta">등록한 문의가 없습니다.</li> : null}
          {list.map((ticket) => (
            <li key={ticket.id} className="account-list__item">
              <div>
                <p className="account-list__title">{ticket.title}</p>
                <p className="account-list__meta">{ticket.createdAt}</p>
                <p className="account-list__meta">{ticket.body}</p>
                {ticket.replies.map((reply) => (
                  <p key={reply.id} className="account-ok">
                    답변 · {reply.authorName}: {reply.body}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </MypageLayout>
  )
}
