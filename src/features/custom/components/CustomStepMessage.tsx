import { CUSTOM_MESSAGE_HINTS } from '../data/customOptions'

interface CustomStepMessageProps {
  name: string
  message: string
  reserved: boolean
  onName: (value: string) => void
  onMessage: (value: string) => void
  onReserve: () => void
}

export default function CustomStepMessage({
  name,
  message,
  reserved,
  onName,
  onMessage,
  onReserve,
}: CustomStepMessageProps) {
  return (
    <section className="custom-panel">
      <h3>4. 나만의 이름 새기기</h3>
      <p className="custom-panel__lead">결혼 답례, 생일 감사, 명절 선물처럼 특별한 멘트를 병에 남깁니다.</p>
      <ul className="custom-hints">
        {CUSTOM_MESSAGE_HINTS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <label className="custom-field">
        새길 이름
        <input value={name} maxLength={12} placeholder="예: 김민준 · 이하은" onChange={(event) => onName(event.target.value)} />
      </label>
      <label className="custom-field">
        특별한 멘트
        <textarea
          value={message}
          maxLength={60}
          rows={3}
          placeholder="예: 함께한 십 년을 빚어 담았습니다."
          onChange={(event) => onMessage(event.target.value)}
        />
      </label>
      <button type="button" className="custom-cta" disabled={!name.trim() && !message.trim()} onClick={onReserve}>
        커스텀 라벨 완료하고 예약하기
      </button>
      {reserved ? <p className="custom-ok">예약 요청을 담아 두었습니다. 담당자가 견적 확인 후 연락드립니다.</p> : null}
    </section>
  )
}
