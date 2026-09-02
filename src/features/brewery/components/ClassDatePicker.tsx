const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']
const YEAR = 2026
const MONTH = 3

interface ClassDatePickerProps {
  selected: string | null
  availableDates: Set<string>
  onSelect: (key: string | null) => void
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export default function ClassDatePicker({ selected, availableDates, onSelect }: ClassDatePickerProps) {
  const firstWeekday = new Date(YEAR, MONTH, 1).getDay()
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate()
  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <section className="class-cal">
      <h2 className="class-cal__title">2026년 4월</h2>
      <div className="class-cal__week">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="class-cal__grid">
        {cells.map((day, index) => {
          if (!day) {
            return <span key={`empty-${index}`} />
          }
          const key = `${YEAR}-${pad(MONTH + 1)}-${pad(day)}`
          const hasClass = availableDates.has(key)
          const on = selected === key
          return (
            <button
              key={key}
              type="button"
              className={`class-cal__day${on ? ' class-cal__day--on' : ''}${hasClass ? ' class-cal__day--open' : ''}`}
              onClick={() => onSelect(on ? null : key)}
            >
              {day}
            </button>
          )
        })}
      </div>
    </section>
  )
}
