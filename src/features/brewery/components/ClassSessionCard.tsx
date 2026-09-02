import { CalendarDays, MapPin } from 'lucide-react'
import type { ClassSession } from '../types/classSession'

interface ClassSessionCardProps {
  session: ClassSession
  booked: boolean
  onBook: (id: string) => void
}

export default function ClassSessionCard({ session, booked, onBook }: ClassSessionCardProps) {
  const closed = session.closed
  const label = closed ? '신청 마감' : booked ? '예약 완료' : '예약하기'

  return (
    <article className={`class-card${closed ? ' class-card--closed' : ''}`}>
      <img src={session.image} alt="" className="class-card__image" />
      <div className="class-card__body">
        <h3 className="class-card__title">{session.title}</h3>
        <p className="class-card__meta">
          <span>
            <MapPin size={13} />
            {session.place}
          </span>
          <span>
            <CalendarDays size={13} />
            {session.dateLabel}
          </span>
        </p>
      </div>
      <div className="class-card__action">
        <p className="class-card__price">{session.price.toLocaleString()}원</p>
        <button
          type="button"
          className="class-card__btn"
          disabled={closed || booked}
          onClick={() => onBook(session.id)}
        >
          {label}
        </button>
      </div>
    </article>
  )
}
