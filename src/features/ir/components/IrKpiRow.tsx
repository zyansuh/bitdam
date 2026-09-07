import type { IrKpi } from '../types/ir'

interface IrKpiRowProps {
  items: IrKpi[]
}

export default function IrKpiRow({ items }: IrKpiRowProps) {
  return (
    <section className="ir-block" id="kpis">
      <h2>빚담 비즈니스 핵심 지표</h2>
      <ul className="ir-kpis">
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.label}</p>
            <strong className={`ir-kpis__value ir-kpis__value--${item.tone}`}>{item.value}</strong>
            <span>{item.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
