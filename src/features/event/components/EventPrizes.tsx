import type { HolidayPrize } from '../types/holidayEvent'

interface EventPrizesProps {
  prizes: HolidayPrize[]
}

export default function EventPrizes({ prizes }: EventPrizesProps) {
  return (
    <section className="event-prizes">
      <h2>풍성한 명절 특별 혜택 및 선물 리스트</h2>
      <ul>
        {prizes.map((item) => (
          <li key={item.rank}>
            <span>{item.rank}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
              <em>{item.extra}</em>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
