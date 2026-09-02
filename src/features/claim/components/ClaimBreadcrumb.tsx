import { Link } from 'react-router-dom'

export default function ClaimBreadcrumb() {
  return (
    <nav className="claim-bc" aria-label="breadcrumb">
      <Link to="/">홈</Link>
      <span>/</span>
      <Link to="/wishlist">마이페이지</Link>
      <span>/</span>
      <Link to="/order/complete">주문/배송 조회</Link>
      <span>/</span>
      <span>교환/반품 신청</span>
    </nav>
  )
}
