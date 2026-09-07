import { useRef } from 'react'
import { useFocusTrap } from '../../../shared/hooks/useFocusTrap'
import type { GiftWrap } from '../types/gift'

interface GiftWrapPreviewDialogProps {
  wrap: GiftWrap | null
  onClose: () => void
}

export default function GiftWrapPreviewDialog({ wrap, onClose }: GiftWrapPreviewDialogProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  useFocusTrap(Boolean(wrap), rootRef)

  if (!wrap) {
    return null
  }

  return (
    <div
      ref={rootRef}
      className="gift-wrap-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-wrap-preview-title"
    >
      <button type="button" className="gift-wrap-dialog__backdrop" aria-label="닫기" onClick={onClose} />
      <div className="gift-wrap-dialog__panel">
        <img src={wrap.image} alt="" />
        <h2 id="gift-wrap-preview-title">{wrap.label}</h2>
        <p>{wrap.detail}</p>
        <button type="button" className="shop-gold-btn" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  )
}
