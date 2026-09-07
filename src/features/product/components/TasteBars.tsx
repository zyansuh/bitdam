import type { TasteProfile } from '../../../data/products'
import { TASTE_SCORE_MAX } from '../../../data/products'
import { TASTE_METRICS } from '../data/tasteMetrics'

interface TasteBarsProps {
  taste: TasteProfile
  compact?: boolean
}

export default function TasteBars({ taste, compact = false }: TasteBarsProps) {
  return (
    <ul className={compact ? 'taste-bars taste-bars--compact' : 'taste-bars'}>
      {TASTE_METRICS.map((metric) => {
        const value = taste[metric.key]
        const width = `${(value / TASTE_SCORE_MAX) * 100}%`

        return (
          <li key={metric.key} className="taste-bars__row">
            <span className="taste-bars__label">{metric.label}</span>
            <span className="taste-bars__track">
              <span className="taste-bars__fill" style={{ width }} />
            </span>
            <span className="taste-bars__value">
              {value}/{TASTE_SCORE_MAX}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
