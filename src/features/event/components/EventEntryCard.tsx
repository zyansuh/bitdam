import CountdownBoxes from '../../../shared/components/feedback/CountdownBoxes'
import { useCountdown } from '../../../shared/hooks/useCountdown'
import type { EventEntryDraft } from '../hooks/useEventEntry'

interface EventEntryCardProps {
  endsAt: string
  entries: number
  draft: EventEntryDraft
  onName: (value: string) => void
  onOrderNo: (value: string) => void
  onWish: (value: string) => void
  onSubmit: () => void
}

export default function EventEntryCard({
  endsAt,
  entries,
  draft,
  onName,
  onOrderNo,
  onWish,
  onSubmit,
}: EventEntryCardProps) {
  const parts = useCountdown(endsAt)

  return (
    <aside className="event-entry">
      <p className="event-entry__time">TIME REMAINING</p>
      <CountdownBoxes parts={parts} showDays label="DAYS : HOURS : MINUTES" />
      <p className="event-entry__count">현재 총 {entries.toLocaleString()}명이 응모에 참여했습니다.</p>
      <h2>보름달 소원 적고 응모하기</h2>
      <label>
        주문자명
        <input value={draft.name} onChange={(event) => onName(event.target.value)} />
      </label>
      <label>
        주문번호 (12자리)
        <input value={draft.orderNo} onChange={(event) => onOrderNo(event.target.value)} maxLength={12} />
      </label>
      <label>
        보름달에게 빌고 싶은 소원 한마디
        <textarea value={draft.wish} onChange={(event) => onWish(event.target.value)} rows={4} />
      </label>
      {draft.submitted ? (
        <p className="gift-done">응모가 접수되었습니다. 당첨자는 공지에서 안내합니다.</p>
      ) : (
        <button type="button" className="shop-gold-btn" onClick={onSubmit}>
          이벤트 응모 완료하기
        </button>
      )}
    </aside>
  )
}
