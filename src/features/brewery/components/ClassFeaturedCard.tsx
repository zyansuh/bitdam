import type { ClassSession } from '../types/classSession'

interface ClassFeaturedCardProps {
  session: ClassSession
  booked: boolean
  onBook: (id: string) => void
}

export default function ClassFeaturedCard({ session, booked, onBook }: ClassFeaturedCardProps) {
  const closed = session.closed
  const label = closed ? '신청 마감' : booked ? '예약 완료' : '지금 바로 신청하기'

  return (
    <article className="class-featured">
      <img src={session.image} alt="" className="class-featured__image" />
      <div className="class-featured__copy">
        <p className="class-featured__kicker">{session.featuredKicker ?? '추천 클래스'}</p>
        <h2 className="class-featured__title">{session.title}</h2>
        <p className="class-featured__price">{session.price.toLocaleString()}원</p>
        <button
          type="button"
          className="class-featured__btn"
          disabled={closed || booked}
          onClick={() => onBook(session.id)}
        >
          {label}
        </button>
      </div>
    </article>
  )
}
