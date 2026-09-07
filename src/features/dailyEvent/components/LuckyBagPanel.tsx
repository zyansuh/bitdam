import { STAMP_MAX } from '../data/dailyEventCopy'
import type { LuckyBagState } from '../types/dailyEvent'

interface LuckyBagPanelProps {
  state: LuckyBagState
  openedToday: boolean
  onOpen: () => void
}

export default function LuckyBagPanel({ state, openedToday, onOpen }: LuckyBagPanelProps) {
  const expire = state.coupon
    ? new Date(state.coupon.expiresAt).toLocaleDateString('ko-KR')
    : ''

  return (
    <section className="lucky-panel">
      <h1>매일 열리는 복주머니 이벤트</h1>
      <p>매일 출석 스탬프를 모으면 귀한 전통주 경품에 응모할 수 있습니다.</p>
      <div className="lucky-bag">
        <span>복</span>
        <p>오늘의 출석 보상: 빚담 {state.coupon?.amount ?? 5000}원 즉시 할인 쿠폰</p>
        {state.coupon ? (
          <p className="lucky-expire">
            쿠폰은 {expire}까지 7일간 유효합니다. 일부 한정판에는 쓸 수 없습니다.
          </p>
        ) : null}
        <button type="button" className="shop-gold-btn" disabled={openedToday} onClick={onOpen}>
          {openedToday ? '오늘은 이미 열었습니다' : '오늘의 복주머니 열기'}
        </button>
      </div>
      <h2>스탬프 카드 현황</h2>
      <ol className="lucky-stamps">
        {Array.from({ length: STAMP_MAX }, (_, index) => (
          <li key={index} className={index < state.stamps ? 'is-on' : undefined}>
            {index < state.stamps ? '✓' : index + 1}
          </li>
        ))}
      </ol>
    </section>
  )
}
