import type { HolidayWinner } from '../types/holidayEvent'

interface EventWinnersProps {
  winners: HolidayWinner[]
}

export default function EventWinners({ winners }: EventWinnersProps) {
  if (winners.length === 0) return null

  return (
    <section className="event-winners">
      <h2>이전 차수 당첨자 목록</h2>
      <table>
        <thead>
          <tr>
            <th>경품</th>
            <th>이름</th>
            <th>지역</th>
            <th>연락처</th>
            <th>발표일</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((item) => (
            <tr key={`${item.name}-${item.date}`}>
              <td>{item.prize}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.phone}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
