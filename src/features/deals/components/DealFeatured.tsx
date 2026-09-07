import { formatWon } from '../../../shared/utils/formatWon'
import { FEATURED_DEAL } from '../data/timeSales'
import SafeImage from '../../../shared/components/media/SafeImage'

export default function DealFeatured() {
  const item = FEATURED_DEAL

  return (
    <section className="deal-feature">
      <h2>놓치면 후회하는 마감 임박 딜</h2>
      <article className="deal-feature__card">
        <SafeImage src={item.image} alt="" />
        <div>
          <span className="deal-badge">Last {item.remain} units</span>
          <h3>{item.name}</h3>
          <p className="deal-price">
            <s>{formatWon(item.origin)}</s>
            <strong>{formatWon(item.sale)}</strong>
            <em>{item.discount}% OFF</em>
          </p>
          <div className="deal-bar">
            <i style={{ width: `${item.sold}%` }} />
          </div>
          <p>
            {item.sold}% 실시간 소진 · 잔여 {item.remain} / 총 {item.stock}
          </p>
        </div>
        <button type="button" className="shop-gold-btn">
          바로 구매하기
        </button>
      </article>
    </section>
  )
}
