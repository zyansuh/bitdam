import type { LoungeMonthBar } from '../types/lounge'

interface LoungeSalesBarsProps {
  bars: LoungeMonthBar[]
}

export default function LoungeSalesBars({ bars }: LoungeSalesBarsProps) {
  const max = Math.max(...bars.map((bar) => bar.amount), 1)

  return (
    <section className="lounge-panel">
      <h2>매출 트렌드 분석</h2>
      <div className="lounge-bars">
        {bars.map((bar) => (
          <div key={bar.month} className="lounge-bars__col">
            <span
              className={`lounge-bars__fill${bar.month === '12월' || bar.month === '10월' ? ' lounge-bars__fill--on' : ''}`}
              style={{ height: `${Math.round((bar.amount / max) * 100)}%` }}
            />
            <span>{bar.month.replace('월', '')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
