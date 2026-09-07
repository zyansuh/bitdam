import { Link } from 'react-router-dom'
import {
  canOpenAdminScope,
  canOpenLounge,
  resolveWorkspaceRole,
  workspaceRoleLabel,
} from '../../../shared/utils/workspaceRole'
import { useAuth } from '../../../shared/hooks/useAuth'
import { getSellerShop } from '../data/sellerShops'

export default function MypageWorkspaceCards() {
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  if (!canOpenLounge(role)) return null

  const shop = getSellerShop(user?.sellerId)
  const isAdmin = canOpenAdminScope(role)

  return (
    <section className="lounge-mypage-cards">
      <Link to="/mypage/lounge" className="lounge-mypage-card">
        <p className="lounge-mypage-card__kicker">{workspaceRoleLabel(role)}</p>
        <h2>셀러 라운지</h2>
        <p>{isAdmin ? '입점 공방 대시보드를 공방별로 조회합니다.' : `${shop?.name ?? '내 공방'} 주문·정산·상품을 관리합니다.`}</p>
      </Link>
      {isAdmin ? (
        <Link to="/mypage/lounge" className="lounge-mypage-card lounge-mypage-card--admin">
          <p className="lounge-mypage-card__kicker">ADMIN</p>
          <h2>운영 콘솔</h2>
          <p>전체 셀러 매출·정산을 한 화면에서 봅니다. 라운지 상단에서 공방을 고르세요.</p>
        </Link>
      ) : null}
    </section>
  )
}
