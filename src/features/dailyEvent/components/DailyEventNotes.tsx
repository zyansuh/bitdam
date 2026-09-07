import { DAILY_EVENT_RULES } from '../data/dailyEventCopy'

export default function DailyEventNotes() {
  return (
    <section className="lucky-notes">
      <h2>이벤트 유의 사항</h2>
      <ul>
        {DAILY_EVENT_RULES.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </section>
  )
}
