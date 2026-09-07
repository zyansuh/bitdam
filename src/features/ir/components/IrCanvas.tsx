import { IR_CANVAS } from '../data/irPeople'

export default function IrCanvas() {
  return (
    <section className="ir-block" id="canvas">
      <h2>빚담 핵심 비즈니스 모델 캔버스</h2>
      <ul className="ir-canvas">
        {IR_CANVAS.map((card) => (
          <li key={card.id} className="ir-card">
            <h3>{card.title}</h3>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
