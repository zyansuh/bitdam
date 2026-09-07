import { Link } from 'react-router-dom'
import { HOLIDAY_TOURS } from '../data/holidayTours'

export default function HolidayTourList() {
  return (
    <section className="htour-list">
      <div className="htour-list__inner">
      <h2>추석 단독 투어 리스트</h2>
      <p>가장 정겨운 가을날, 귀한 투어 패키지를 선보입니다.</p>
      <ul>
        {HOLIDAY_TOURS.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="" />
            <div>
              <h3>{item.title}</h3>
              <span>잔여 {item.remain}석</span>
              <p>{item.place}</p>
              <p>{item.when}</p>
              <Link className="shop-gold-btn" to="/tours">
                예약하기
              </Link>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}
