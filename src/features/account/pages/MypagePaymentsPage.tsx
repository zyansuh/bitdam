import MypageLayout from '../components/MypageLayout'
import { useSavedPayments } from '../hooks/useSavedPayments'

export default function MypagePaymentsPage() {
  const { list, draft, setDraft, addPayment, removePayment } = useSavedPayments()

  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">결제수단 관리</h1>
        <ul className="account-list">
          {list.map((card) => (
            <li key={card.id} className="account-list__item">
              <div>
                <p className="account-list__title">
                  {card.brand} **** {card.last4}
                </p>
                <p className="account-list__meta">{card.holder}</p>
              </div>
              <button type="button" className="account-ghost" onClick={() => removePayment(card.id)}>
                삭제
              </button>
            </li>
          ))}
        </ul>
        <form
          className="account-form"
          onSubmit={(event) => {
            event.preventDefault()
            addPayment()
          }}
        >
          <h2 className="account-panel__title">카드 추가</h2>
          <label className="account-field">
            <span className="account-field__label">카드사</span>
            <input value={draft.brand} onChange={(event) => setDraft({ ...draft, brand: event.target.value })} />
          </label>
          <label className="account-field">
            <span className="account-field__label">끝 4자리</span>
            <input value={draft.last4} onChange={(event) => setDraft({ ...draft, last4: event.target.value })} />
          </label>
          <label className="account-field">
            <span className="account-field__label">명의자</span>
            <input value={draft.holder} onChange={(event) => setDraft({ ...draft, holder: event.target.value })} />
          </label>
          <button type="submit" className="account-save">
            결제수단 저장
          </button>
        </form>
      </section>
    </MypageLayout>
  )
}
