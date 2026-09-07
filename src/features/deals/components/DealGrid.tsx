import { formatWon } from '../../../shared/utils/formatWon'
import type { TimeSaleItem } from '../types/timeSale'
import SafeImage from '../../../shared/components/media/SafeImage'

interface DealGridProps {
  items: TimeSaleItem[]
}

export default function DealGrid({ items }: DealGridProps) {
  return (
    <section className="deal-grid-wrap">
      <header>
        <p>총 {items.length}개 타임 특가 전통주가 진행 중입니다</p>
      </header>
      <ul className="deal-grid">
        {items.map((item) => (
          <li key={item.id}>
            <article className="deal-card">
              <div className="deal-card__media">
                <SafeImage src={item.image} alt="" />
                <span>{item.discount}%</span>
              </div>
              <strong>{item.name}</strong>
              <p className="deal-price">
                <s>{formatWon(item.origin)}</s>
                <em>{formatWon(item.sale)}</em>
              </p>
              <div className="deal-bar">
                <i style={{ width: `${item.sold}%` }} />
              </div>
              <p>{item.sold}% 판매</p>
              <button type="button" className="shop-gold-btn">
                바로 구매하기
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
