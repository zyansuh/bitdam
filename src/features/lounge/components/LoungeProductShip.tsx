interface LoungeProductShipProps {
  memo: string
  onMemo: (value: string) => void
}

export default function LoungeProductShip({ memo, onMemo }: LoungeProductShipProps) {
  return (
    <div className="lounge-form">
      <h2>배송설정</h2>
      <label>
        출고 · 주류 안내
        <textarea rows={6} value={memo} onChange={(event) => onMemo(event.target.value)} />
      </label>
    </div>
  )
}
