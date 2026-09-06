import MypageLayout from '../components/MypageLayout'
import { useSavedAddresses } from '../hooks/useSavedAddresses'

export default function MypageAddressesPage() {
  const { list, draft, setDraft, addAddress, removeAddress, setDefault } = useSavedAddresses()

  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">배송지 관리</h1>
        <ul className="account-list">
          {list.map((address) => (
            <li key={address.id} className="account-list__item">
              <div>
                <p className="account-list__title">
                  {address.label}
                  {address.isDefault ? <span className="mypage-status">기본</span> : null}
                </p>
                <p className="account-list__meta">
                  {address.name} · {address.phone}
                </p>
                <p className="account-list__meta">{address.line}</p>
              </div>
              <div className="account-list__actions">
                {!address.isDefault ? (
                  <button type="button" className="account-ghost" onClick={() => setDefault(address.id)}>
                    기본으로
                  </button>
                ) : null}
                <button type="button" className="account-ghost" onClick={() => removeAddress(address.id)}>
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
        <form
          className="account-form"
          onSubmit={(event) => {
            event.preventDefault()
            addAddress()
          }}
        >
          <h2 className="account-panel__title">배송지 추가</h2>
          <label className="account-field">
            <span className="account-field__label">배송지명</span>
            <input value={draft.label} onChange={(event) => setDraft({ ...draft, label: event.target.value })} />
          </label>
          <label className="account-field">
            <span className="account-field__label">받는 분</span>
            <input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} />
          </label>
          <label className="account-field">
            <span className="account-field__label">연락처</span>
            <input value={draft.phone} onChange={(event) => setDraft({ ...draft, phone: event.target.value })} />
          </label>
          <label className="account-field">
            <span className="account-field__label">주소</span>
            <input value={draft.line} onChange={(event) => setDraft({ ...draft, line: event.target.value })} />
          </label>
          <button type="submit" className="account-save">
            배송지 저장
          </button>
        </form>
      </section>
    </MypageLayout>
  )
}
