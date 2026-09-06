import { GIFT_MESSAGE_MAX, GIFT_SKINS, GIFT_WRAPS } from '../data/giftOptions'
import { formatWon } from '../../../shared/utils/formatWon'

interface GiftMessageProps {
  skinId: string
  message: string
  wrapId: string
  onSkin: (id: string) => void
  onMessage: (value: string) => void
  onWrap: (id: string) => void
  onNext: () => void
  onBack: () => void
}

export default function GiftMessage({
  skinId,
  message,
  wrapId,
  onSkin,
  onMessage,
  onWrap,
  onNext,
  onBack,
}: GiftMessageProps) {
  return (
    <section className="gift-panel">
      <header>
        <h1>선물 카드 &amp; 메시지 작성</h1>
        <p>따뜻한 편지와 보자기 패키지로 받는 분의 상을 먼저 그려 보세요.</p>
      </header>
      <h2>카드 스킨 템플릿</h2>
      <div className="gift-pills">
        {GIFT_SKINS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`gift-pill${skinId === item.id ? ' gift-pill--on' : ''}`}
            onClick={() => onSkin(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <h2>고마운 마음 편지 작성</h2>
      <textarea
        className="gift-letter"
        maxLength={GIFT_MESSAGE_MAX}
        value={message}
        onChange={(event) => onMessage(event.target.value)}
      />
      <p className="gift-count">
        {message.length} / {GIFT_MESSAGE_MAX}자
      </p>
      <h2>명품 수제 패키징 보자기 옵션</h2>
      <ul className="gift-wraps">
        {GIFT_WRAPS.map((item) => (
          <li key={item.id}>
            <label className={`gift-wrap${wrapId === item.id ? ' gift-wrap--on' : ''}`}>
              <input type="radio" name="wrap" checked={wrapId === item.id} onChange={() => onWrap(item.id)} />
              <span>{item.label}</span>
              <em>+{formatWon(item.extra)}</em>
            </label>
          </li>
        ))}
      </ul>
      <div className="gift-actions">
        <button type="button" className="shop-ghost-btn" onClick={onBack}>
          상품 다시 고르기
        </button>
        <button type="button" className="shop-gold-btn" disabled={!message.trim()} onClick={onNext}>
          결제로 이동하기
        </button>
      </div>
    </section>
  )
}
