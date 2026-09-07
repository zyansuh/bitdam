import { useRef } from 'react'
import { useFocusTrap } from '../../../shared/hooks/useFocusTrap'
import { useSellerVerify } from '../hooks/useSellerVerify'
import { DEMO_ANDONG_BIZ_NO, DEMO_HANSAN_BIZ_NO } from '../data/sellerLicenses'
import LoungeMatchedShop from './LoungeMatchedShop'

interface LoungeVerifyModalProps {
  embedded?: boolean
}

export default function LoungeVerifyModal({ embedded = false }: LoungeVerifyModalProps) {
  const form = useSellerVerify()
  const rootRef = useRef<HTMLElement>(null)
  useFocusTrap(!embedded, rootRef)

  return (
    <section
      ref={rootRef}
      className={embedded ? 'lounge-verify lounge-verify--page' : 'lounge-verify-mask'}
      role="dialog"
      aria-modal={!embedded}
      aria-labelledby="lounge-verify-title"
    >
      <div className="lounge-verify">
        <p className="lounge-verify__kicker">SELLER 사전 지정</p>
        <h1 id="lounge-verify-title">사업자 인증 후 내 공방이 열립니다</h1>
        <p className="lounge-verify__lead">
          셀러 라운지는 인증된 양조장·공방 데이터만 보여 줍니다. 사업자등록번호로 입점 명단을 조회하세요.
        </p>
        <form
          className="lounge-form"
          onSubmit={(event) => {
            event.preventDefault()
            form.lookup()
          }}
        >
          <label>
            사업자등록번호
            <input
              inputMode="numeric"
              placeholder="000-00-00000"
              value={form.bizNo}
              onChange={(event) => form.setBizNo(event.target.value)}
            />
          </label>
          <label>
            대표자명
            <input value={form.owner} onChange={(event) => form.setOwner(event.target.value)} />
          </label>
          {form.error ? <p className="lounge-verify__error">{form.error}</p> : null}
          <button type="submit" className="lounge-btn">
            사업자 인증하기
          </button>
        </form>
        {form.matched ? <LoungeMatchedShop shop={form.matched} onConfirm={form.confirm} /> : null}
        <p className="lounge-verify__hint">
          데모 · 한산 소곡주 <code>{DEMO_HANSAN_BIZ_NO}</code> (대표 김설아) · 안동{' '}
          <code>{DEMO_ANDONG_BIZ_NO}</code> (대표 박안동)
        </p>
      </div>
    </section>
  )
}
