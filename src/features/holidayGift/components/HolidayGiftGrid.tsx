import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import type { HolidayGiftSet } from '../types/holidayGift'

interface HolidayGiftGridProps {
  items: HolidayGiftSet[]
}

export default function HolidayGiftGrid({ items }: HolidayGiftGridProps) {
  return (
    <section className="hgift-grid-wrap">
      <header>
        <p>총 {items.length}개의 상품이 있습니다.</p>
      </header>
      <ul className="hgift-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article>
              <img src={item.image} alt="" />
              <strong>{item.name}</strong>
              <em>{formatWon(item.price)}</em>
              <Link className="shop-gold-btn" to="/gift">
                선물하기
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
