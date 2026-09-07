import type { LoungeKpi } from '../types/lounge'

interface LoungeKpiRowProps {
  items: LoungeKpi[]
}

export default function LoungeKpiRow({ items }: LoungeKpiRowProps) {
  return (
    <section className="lounge-kpis">
      {items.map((item) => (
        <article key={item.id} className={`lounge-kpi${item.warn ? ' lounge-kpi--warn' : ''}`}>
          <p className="lounge-kpi__label">{item.label}</p>
          <p className="lounge-kpi__value">{item.value}</p>
          <p className="lounge-kpi__note">{item.note}</p>
        </article>
      ))}
    </section>
  )
}
