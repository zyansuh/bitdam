import { formatWon } from '../../../shared/utils/formatWon'
import { CORPORATE_SETS } from '../data/corporateOffers'

export default function CorporateSets() {
  return (
    <section className="corp-sets">
      <h2>테마별 정취 가득한 품격 기프트 세트</h2>
      <p>특별한 날에 감사의 마음을 전하는 단체 선물 구성입니다.</p>
      <ul>
        {CORPORATE_SETS.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="" />
            <strong>{item.name}</strong>
            <p>{item.contents}</p>
            <em>
              {formatWon(item.priceFrom)} - {formatWon(item.priceTo)}
            </em>
            <button type="button" className="shop-gold-btn">
              바로 주문
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
