import { GIFT_STEPS } from '../data/giftOptions'
import type { GiftStepId } from '../types/gift'

interface GiftStepBarProps {
  step: GiftStepId
  canEnter: (id: GiftStepId) => boolean
  onSelect: (id: GiftStepId) => void
}

export default function GiftStepBar({ step, canEnter, onSelect }: GiftStepBarProps) {
  return (
    <ol className="gift-bar">
      {GIFT_STEPS.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className={`gift-bar__item${item.id === step ? ' gift-bar__item--on' : ''}`}
            disabled={!canEnter(item.id)}
            onClick={() => onSelect(item.id)}
          >
            <span>{item.id}</span>
            {item.title}
          </button>
        </li>
      ))}
    </ol>
  )
}
