import { formatWon } from '../../../shared/utils/formatWon'
import { GIFT_WRAPS } from '../data/giftOptions'
import type { GiftDraft } from '../types/gift'
import { getGiftProduct } from '../utils/giftQuote'

interface GiftSummaryProps {
  draft: GiftDraft
  total: number
}

export default function GiftSummary({ draft, total }: GiftSummaryProps) {
  const product = getGiftProduct(draft.productId)
  const wrap = GIFT_WRAPS.find((item) => item.id === draft.wrapId)

  return (
    <aside className="gift-summary">
      <p className="gift-summary__eyebrow">RECIPIENT CARD PREVIEW</p>
      <blockquote className={`gift-card gift-card--${draft.skinId}`}>
        <span>빚담 GIFT</span>
        <p>{draft.message || '메시지를 작성하면 이 자리에 보입니다.'}</p>
      </blockquote>
      {product ? (
        <div className="gift-summary__item">
          <img src={product.image} alt="" />
          <div>
            <strong>{product.name}</strong>
            <p>
              수량: {draft.qty}개 / {wrap?.label} 포함
            </p>
          </div>
        </div>
      ) : (
        <p className="gift-summary__empty">상품을 먼저 골라 주세요.</p>
      )}
      <p className="gift-summary__total">{formatWon(total)}</p>
    </aside>
  )
}
