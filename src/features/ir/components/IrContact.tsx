import type { IrInquiry } from '../hooks/useIrInquiry'
import type { IrSnapshot } from '../types/ir'
import { downloadPitchDeck } from '../utils/downloadPitchDeck'

interface IrContactProps {
  snapshot: IrSnapshot
  draft: IrInquiry
  onOrg: (value: string) => void
  onEmail: (value: string) => void
  onSend: () => void
}

export default function IrContact({ snapshot, draft, onOrg, onEmail, onSend }: IrContactProps) {
  return (
    <section className="ir-split ir-block" id="contact">
      <article className="ir-card">
        <h2>빚담 투자 IR 자료실</h2>
        <p>디지털 전환 비전, 시장 확장, 그리고 사이트 데이터로 계산한 3년 매출 가정을 담았습니다.</p>
        <ul className="ir-sources">
          {snapshot.sources.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <button type="button" className="shop-gold-btn" onClick={() => downloadPitchDeck(snapshot)}>
          Pitch Deck 다운로드 (TXT)
        </button>
      </article>
      <form
        className="ir-card"
        onSubmit={(event) => {
          event.preventDefault()
          onSend()
        }}
      >
        <h2>IR 담당 투자 제휴 문의</h2>
        <label>
          기관 / 성함
          <input value={draft.org} onChange={(event) => onOrg(event.target.value)} />
        </label>
        <label>
          이메일
          <input type="email" value={draft.email} onChange={(event) => onEmail(event.target.value)} />
        </label>
        {draft.sent ? (
          <p className="gift-done">문의가 접수되었습니다. IR 담당이 회신합니다.</p>
        ) : (
          <button type="submit" className="shop-navy-btn">
            투자문의 발송하기
          </button>
        )}
      </form>
    </section>
  )
}
