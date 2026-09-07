import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import { readSellerCatalog } from '../../../shared/utils/sellerCatalogStorage'
import { LOUNGE_PRODUCTS } from '../data/loungeRecords'
import { inSellerScope } from '../utils/inSellerScope'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { sellerIdsForScope } from '../utils/loungeSnapshot'
import type { LoungeProductRow } from '../types/lounge'

function sellerRows(): LoungeProductRow[] {
  return readSellerCatalog().map((item) => ({
    id: String(item.id),
    sellerId: item.sellerId,
    name: item.name,
    category: item.category,
    stock: item.stock ?? 0,
    price: item.price,
    image: item.image,
    href: `/products/${item.id}`,
  }))
}

export default function LoungeProductList() {
  const { scopeId } = useLoungeScope()
  const ids = sellerIdsForScope(scopeId)
  const rows = inSellerScope([...sellerRows(), ...LOUNGE_PRODUCTS], ids)

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
              {row.href ? (
                <Link to={row.href} className="lounge-denied__link">
                  카탈로그에서 보기
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
