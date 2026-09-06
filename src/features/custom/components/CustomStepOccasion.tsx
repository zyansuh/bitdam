import { CUSTOM_OCCASIONS } from '../data/customOptions'

interface CustomStepOccasionProps {
  occasionId: string
  onPick: (id: string) => void
}

export default function CustomStepOccasion({ occasionId, onPick }: CustomStepOccasionProps) {
  return (
    <section className="custom-panel">
      <h3>1. 카테고리 선택</h3>
      <p className="custom-panel__lead">기념일이나 용도를 고르면 라벨 톤을 맞춰 드려요.</p>
      <div className="custom-chips">
        {CUSTOM_OCCASIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`custom-chip${occasionId === item.id ? ' custom-chip--on' : ''}`}
            onClick={() => onPick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  )
}
