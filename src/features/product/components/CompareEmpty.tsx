import { Link } from 'react-router-dom'

export default function CompareEmpty() {
  return (
    <div className="compare-empty">
      <p>비교할 술을 아직 고르지 않았습니다.</p>
      <Link to="/products" className="compare-empty__link">
        상품 목록에서 고르기
      </Link>
    </div>
  )
}
