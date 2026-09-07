import StaffLayout from '../../staff/components/StaffLayout'
import { useSupportDesk } from '../hooks/useSupportDesk'

export default function AdminSupportPage() {
  const desk = useSupportDesk()

  return (
    <StaffLayout allowStaff>
      <section className="lounge-panel">
        <h2>1:1 문의</h2>
        <p className="staff-lead">회원 문의를 보고 답변합니다. 답변은 회원 마이페이지 문의 내역에 바로 보입니다.</p>
        {desk.tickets.length === 0 ? <p className="staff-lead">접수된 문의가 없습니다.</p> : null}
        <ul className="account-list">
          {desk.tickets.map((ticket) => (
            <li key={ticket.id} className="account-list__item">
              <div>
                <p className="account-list__title">
                  {ticket.title} · {ticket.status === 'answered' ? '답변 완료' : '대기'}
                </p>
                <p className="account-list__meta">
                  {ticket.userName} · {ticket.createdAt}
                </p>
                <p className="account-list__meta">{ticket.body}</p>
                {ticket.replies.map((reply) => (
                  <p key={reply.id} className="account-list__meta">
                    답변 · {reply.authorName}: {reply.body}
                  </p>
                ))}
                <textarea
                  rows={3}
                  className="account-field"
                  value={desk.drafts[ticket.id] ?? ''}
                  onChange={(event) => desk.setDraft(ticket.id, event.target.value)}
                />
                <button type="button" className="lounge-btn" onClick={() => desk.reply(ticket.id)}>
                  답변 등록
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </StaffLayout>
  )
}
