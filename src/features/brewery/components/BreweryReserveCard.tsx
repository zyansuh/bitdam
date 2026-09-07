import type { BreweryDetail } from '../types/breweryDetail'
import { TOUR_GIFT_LABEL, TOUR_TIME_SLOTS } from '../data/tourBooking'
import { useAuth } from '../../../shared/hooks/useAuth'
import { appendBooking } from '../../../shared/utils/bookingStorage'
import { useTourReservation } from '../hooks/useTourReservation'

interface BreweryReserveCardProps {
  brewery: BreweryDetail
}

export default function BreweryReserveCard({ brewery }: BreweryReserveCardProps) {
  const booking = useTourReservation(brewery.programPrice)
  const { user } = useAuth()

  return (
    <section className="brewery-reserve">
      <h2 className="brewery-reserve__title">예약 신청하기</h2>
      <p className="brewery-reserve__step">희망 예약 일정</p>
      <div className="brewery-reserve__dates">
        {booking.dates.map((date) => (
          <button
            key={date.key}
            type="button"
            className={
              booking.dateKey === date.key
                ? 'brewery-reserve__date brewery-reserve__date--on'
                : 'brewery-reserve__date'
            }
            onClick={() => booking.chooseDate(date.key)}
          >
            <span className="brewery-reserve__weekday">{date.weekday}</span>
            <span>{date.day}</span>
          </button>
        ))}
      </div>
      <p className="brewery-reserve__step">이용 가능 타임</p>
      <div className="brewery-reserve__times">
        {TOUR_TIME_SLOTS.map((slot) => (
          <button
            key={slot}
            type="button"
            className={
              booking.time === slot ? 'brewery-reserve__time brewery-reserve__time--on' : 'brewery-reserve__time'
            }
            onClick={() => booking.chooseTime(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      <p className="brewery-reserve__step">예약 인원</p>
      <div className="brewery-reserve__guests">
        <button type="button" className="brewery-reserve__count" onClick={booking.removeGuest} aria-label="인원 줄이기">
          −
        </button>
        <span>{booking.guests}명</span>
        <button type="button" className="brewery-reserve__count" onClick={booking.addGuest} aria-label="인원 늘리기">
          +
        </button>
      </div>
      <dl className="brewery-reserve__bill">
        <div>
          <dt>성인 클래스 × {booking.guests}</dt>
          <dd>{booking.total.toLocaleString()}원</dd>
        </div>
        <div>
          <dt>증정</dt>
          <dd>{TOUR_GIFT_LABEL}</dd>
        </div>
        <div className="brewery-reserve__total">
          <dt>최종 예약 금액</dt>
          <dd>{booking.total.toLocaleString()}원</dd>
        </div>
      </dl>
      <button
        type="button"
        className="brewery-reserve__cta"
        onClick={() => {
          if (!booking.dateKey || !booking.time) return
          booking.submit()
          if (!user) return
          appendBooking({
            id: crypto.randomUUID(),
            userId: user.id,
            kind: 'tour',
            title: brewery.programTitle,
            place: brewery.name,
            date: booking.dateKey,
            time: booking.time,
            guests: booking.guests,
            amount: booking.total,
            createdAt: new Date().toISOString(),
          })
        }}
      >
        {booking.submitted ? '예약 신청이 접수되었습니다' : '실시간 예약 신청하기'}
      </button>
    </section>
  )
}
