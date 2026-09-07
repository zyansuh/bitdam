import { Star } from 'lucide-react'

interface StarScoreProps {
  value: number
  onChange: (value: number) => void
  size?: number
  label: string
}

export default function StarScore({ value, onChange, size = 28, label }: StarScoreProps) {
  return (
    <div className="star-score" role="radiogroup" aria-label={label}>
      {[1, 2, 3, 4, 5].map((score) => (
        <button
          key={score}
          type="button"
          role="radio"
          aria-checked={value === score}
          className={score <= value ? 'star-score__btn star-score__btn--on' : 'star-score__btn'}
          onClick={() => onChange(score)}
        >
          <Star size={size} strokeWidth={1.5} fill={score <= value ? 'currentColor' : 'none'} />
        </button>
      ))}
    </div>
  )
}
