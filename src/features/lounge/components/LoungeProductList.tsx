import { Link } from 'react-router-dom'
import { formatWon } from '../../../shared/utils/formatWon'
import SafeImage from '../../../shared/components/media/SafeImage'
import { useLoungeCatalogRows } from '../hooks/useLoungeCatalogRows'

export default function LoungeProductList() {
  const { rows, togglePause } = useLoungeCatalogRows()

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
            <SafeImage src={row.image} alt="" />
            <div>
              <strong>{row.name}</strong>
              <p>
                {row.category} · 재고 {row.stock}병 · {formatWon(row.price)}
                {row.paused ? ' · 판매 중지' : ''}
              </p>
              {row.href ? (
                <Link to={row.href} className="lounge-denied__link">
                  카탈로그에서 보기
                </Link>
              ) : null}
              {row.catalogId != null ? (
                <button type="button" className="lounge-btn lounge-btn--ghost" onClick={() => togglePause(row.catalogId!)}>
                  {row.paused ? '판매 재개' : '판매 중지'}
                </button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
