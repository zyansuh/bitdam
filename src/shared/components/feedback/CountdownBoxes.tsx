import { pad2 } from '../../utils/splitDuration'
import type { CountdownParts } from '../../types/countdown'

interface CountdownBoxesProps {
  parts: CountdownParts
  showDays?: boolean
  label?: string
}

export default function CountdownBoxes({ parts, showDays = false, label = '남은 시간' }: CountdownBoxesProps) {
  const cells = showDays
    ? [pad2(parts.days), pad2(parts.hours), pad2(parts.minutes)]
    : [pad2(parts.hours), pad2(parts.minutes), pad2(parts.seconds)]

  return (
    <div className="count-boxes">
      <p className="count-boxes__label">{label}</p>
      <div className="count-boxes__row">
        {cells.map((cell, index) => (
          <span key={`${cell}-${index}`} className="count-boxes__cell">
            {index > 0 ? <em>:</em> : null}
            <strong>{cell}</strong>
          </span>
        ))}
      </div>
    </div>
  )
}
