import { POINT_HISTORY } from '../data/membership'

export default function PointHistoryList() {
  return (
    <section className="member-card">
      <h2 className="member-card__title">최근 포인트 적립/사용 내역</h2>
      <ul className="member-history">
        {POINT_HISTORY.map((item) => (
          <li key={item.id}>
            <div>
              <p>{item.title}</p>
              <time>{item.date}</time>
            </div>
            <strong className={item.points >= 0 ? 'member-history__plus' : 'member-history__minus'}>
              {item.points >= 0 ? '+' : ''}
              {item.points.toLocaleString()} P
            </strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
