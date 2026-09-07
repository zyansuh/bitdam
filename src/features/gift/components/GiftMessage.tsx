import { useState } from 'react'
import { GIFT_MESSAGE_MAX, GIFT_SKINS, GIFT_WRAPS } from '../data/giftOptions'
import { formatWon } from '../../../shared/utils/formatWon'
import GiftWrapPreviewDialog from './GiftWrapPreviewDialog'

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
  const [previewId, setPreviewId] = useState<string | null>(null)
  const skin = GIFT_SKINS.find((item) => item.id === skinId) ?? GIFT_SKINS[0]
  const wrapPreview = GIFT_WRAPS.find((item) => item.id === previewId) ?? null

  return (
    <section className="gift-panel">
      <header>
        <h1>선물 카드 &amp; 메시지 작성</h1>
        <p>따뜻한 편지와 보자기 패키지로 받는 분의 상을 먼저 그려 보세요.</p>
      </header>
      <h2>카드 스킨 템플릿</h2>
      <div className="gift-skins">
        {GIFT_SKINS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`gift-skin${skinId === item.id ? ' gift-skin--on' : ''}`}
            onClick={() => onSkin(item.id)}
          >
            <img src={item.image} alt="" />
            <strong>{item.label}</strong>
            <span>{item.hint}</span>
          </button>
        ))}
      </div>
      <div className="gift-skin-live">
        <p className="gift-skin-live__label">선택한 카드 미리보기</p>
        <blockquote className={`gift-card gift-card--${skin.id}`} style={{ backgroundImage: `url(${skin.image})` }}>
          <span>빚담 GIFT</span>
          <p>{message || '메시지를 작성하면 이 자리에 보입니다.'}</p>
        </blockquote>
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
              <img src={item.image} alt="" />
              <span>
                <strong>{item.label}</strong>
                <em>{item.detail}</em>
              </span>
              <b>+{formatWon(item.extra)}</b>
            </label>
            <button type="button" className="gift-wrap__preview" onClick={() => setPreviewId(item.id)}>
              확대 보기
            </button>
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
      <GiftWrapPreviewDialog wrap={wrapPreview} onClose={() => setPreviewId(null)} />
    </section>
  )
}
