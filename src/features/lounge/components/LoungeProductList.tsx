import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import { LOUNGE_PRODUCTS } from '../data/loungeRecords'
import { inSellerScope } from '../utils/inSellerScope'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { sellerIdsForScope } from '../utils/loungeSnapshot'

export default function LoungeProductList() {
  const { scopeId } = useLoungeScope()
  const rows = inSellerScope(LOUNGE_PRODUCTS, sellerIdsForScope(scopeId))

  return (
    <section className="lounge-panel">
      <div className="lounge-panel__head">
        <h2>판매 중인 상품</h2>
        <Link to="/mypage/lounge/products/new" className="lounge-btn">
          상품 등록
        </Link>
      </div>
      <ul className="lounge-products">
        {rows.map((row) => (
          <li key={row.id}>
            <img src={row.image} alt="" />
            <div>
              <strong>{row.name}</strong>
              <p>
                {row.category} · 재고 {row.stock}병 · {formatWon(row.price)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
