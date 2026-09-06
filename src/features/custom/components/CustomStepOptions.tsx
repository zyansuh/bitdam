import { CUSTOM_ABVS, CUSTOM_BORDERS, CUSTOM_SPIRITS } from '../data/customOptions'

interface CustomStepOptionsProps {
  spiritId: string
  abvId: string
  borderId: string
  onSpirit: (id: string) => void
  onAbv: (id: string) => void
  onBorder: (id: string) => void
}

export default function CustomStepOptions({
  spiritId,
  abvId,
  borderId,
  onSpirit,
  onAbv,
  onBorder,
}: CustomStepOptionsProps) {
  return (
    <section className="custom-panel">
      <h3>3. 술 커스텀 옵션</h3>
      <p className="custom-panel__lead">주종과 도수를 고르면 견적에 바로 반영됩니다.</p>
      <p className="custom-panel__label">주종</p>
      <div className="custom-chips">
        {CUSTOM_SPIRITS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`custom-chip${spiritId === item.id ? ' custom-chip--on' : ''}`}
            onClick={() => onSpirit(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="custom-panel__label">도수</p>
      <div className="custom-chips">
        {CUSTOM_ABVS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`custom-chip${abvId === item.id ? ' custom-chip--on' : ''}`}
            onClick={() => onAbv(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <h3>라벨 자수 테두리 컬러</h3>
      <div className="custom-swatches">
        {CUSTOM_BORDERS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`custom-swatch${borderId === item.id ? ' custom-swatch--on' : ''}`}
            style={{ backgroundColor: item.hex }}
            aria-label={item.label}
            onClick={() => onBorder(item.id)}
          />
        ))}
      </div>
    </section>
  )
}
