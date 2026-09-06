import { CUSTOM_STEPS } from '../data/customOptions'
import type { CustomStepId } from '../types/customLabel'

interface CustomStepListProps {
  step: CustomStepId
  canEnter: (id: CustomStepId) => boolean
  onSelect: (id: CustomStepId) => void
}

export default function CustomStepList({ step, canEnter, onSelect }: CustomStepListProps) {
  return (
    <aside className="custom-steps">
      <h2 className="custom-steps__title">라벨 맞춤 단계</h2>
      <ol className="custom-steps__list">
        {CUSTOM_STEPS.map((item) => {
          const on = item.id === step
          const open = canEnter(item.id)
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`custom-steps__item${on ? ' custom-steps__item--on' : ''}`}
                disabled={!open}
                onClick={() => onSelect(item.id)}
              >
                <span className="custom-steps__num">{item.id}</span>
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.hint}</em>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}
