import type { ProductDraft } from '../types/lounge'

interface LoungeProductStepsProps {
  step: ProductDraft['step']
  onSelect: (step: ProductDraft['step']) => void
}

const STEPS: { step: ProductDraft['step']; label: string }[] = [
  { step: 1, label: '기본정보' },
  { step: 2, label: '상세설명' },
  { step: 3, label: '가격/재고' },
  { step: 4, label: '배송설정' },
]

export default function LoungeProductSteps({ step, onSelect }: LoungeProductStepsProps) {
  return (
    <ol className="lounge-steps">
      {STEPS.map((item) => (
        <li key={item.step}>
          <button
            type="button"
            className={`lounge-steps__btn${item.step === step ? ' lounge-steps__btn--on' : ''}`}
            onClick={() => onSelect(item.step)}
          >
            {item.step}. {item.label}
          </button>
        </li>
      ))}
    </ol>
  )
}
