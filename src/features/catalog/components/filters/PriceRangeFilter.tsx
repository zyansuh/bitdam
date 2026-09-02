import type { CSSProperties } from 'react'
import { formatWon } from '../../../../shared/utils/formatWon'
import { PRICE_BOUND } from '../../data/filterOptions'

interface PriceRangeFilterProps {
  min: number
  max: number
  onChange: (min: number, max: number) => void
}

export default function PriceRangeFilter({ min, max, onChange }: PriceRangeFilterProps) {
  const span = PRICE_BOUND.max - PRICE_BOUND.min
  const left = ((min - PRICE_BOUND.min) / span) * 100
  const right = ((PRICE_BOUND.max - max) / span) * 100
  const fillStyle = {
    '--price-left': `${left}%`,
    '--price-right': `${right}%`,
  } as CSSProperties

  return (
    <fieldset>
      <legend className="filter-legend">가격대</legend>
      <div className="price-range-filter__track-wrap">
        <div className="price-range-filter__track" />
        <div
          className="price-range-filter__fill"
          style={{ ...fillStyle, left: `${left}%`, right: `${right}%` }}
        />
        <input
          type="range"
          min={PRICE_BOUND.min}
          max={PRICE_BOUND.max}
          step={1000}
          value={min}
          aria-label="최소 가격"
          className="price-range price-range-filter__input"
          onChange={(event) => {
            const next = Number(event.target.value)
            onChange(Math.min(next, max - 1000), max)
          }}
        />
        <input
          type="range"
          min={PRICE_BOUND.min}
          max={PRICE_BOUND.max}
          step={1000}
          value={max}
          aria-label="최대 가격"
          className="price-range price-range-filter__input"
          onChange={(event) => {
            const next = Number(event.target.value)
            onChange(min, Math.max(next, min + 1000))
          }}
        />
      </div>
      <p className="price-range-filter__value">
        {formatWon(min)} – {formatWon(max)}
      </p>
    </fieldset>
  )
}
