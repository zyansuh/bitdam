import { CORPORATE_TIERS } from '../data/corporateOffers'
import type { CorporateQuote as Quote } from '../types/corporate'

interface CorporateQuoteProps {
  draft: Quote
  onCompany: (value: string) => void
  onContact: (value: string) => void
  onQty: (value: string) => void
  onNote: (value: string) => void
  onSend: () => void
}

export default function CorporateQuote({
  draft,
  onCompany,
  onContact,
  onQty,
  onNote,
  onSend,
}: CorporateQuoteProps) {
  return (
    <section className="corp-quote">
      <div>
        <h2>단체 / 비즈니스 맞춤 제안 안내</h2>
        <table>
          <thead>
            <tr>
              <th>수량</th>
              <th>혜택</th>
            </tr>
          </thead>
          <tbody>
            {CORPORATE_TIERS.map((tier) => (
              <tr key={tier.qty}>
                <td>{tier.qty}</td>
                <td>{tier.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>VIP 맞춤 패키징: 잔 자개 레터링, 고급 우드 택 각인을 요청할 수 있습니다.</p>
      </div>
      <form
        className="corp-form"
        onSubmit={(event) => {
          event.preventDefault()
          onSend()
        }}
      >
        <h3>비즈니스 실시간 견적 요청</h3>
        <p>담당자가 30분 안에 맞춤 제안서를 드립니다. (데모)</p>
        <label>
          회사명
          <input value={draft.company} onChange={(event) => onCompany(event.target.value)} />
        </label>
        <label>
          담당자 · 연락처
          <input value={draft.contact} onChange={(event) => onContact(event.target.value)} />
        </label>
        <label>
          예상 수량
          <input value={draft.qty} onChange={(event) => onQty(event.target.value)} />
        </label>
        <label>
          추가 요청
          <textarea value={draft.note} onChange={(event) => onNote(event.target.value)} rows={4} />
        </label>
        {draft.sent ? (
          <p className="gift-done">제안 요청이 접수되었습니다.</p>
        ) : (
          <button type="submit" className="shop-gold-btn">
            비즈니스 전용 제안서 신청
          </button>
        )}
      </form>
    </section>
  )
}
