import { Link } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import {
  canOpenAdminScope,
  canOpenLounge,
  needsWorkshopVerify,
  resolveWorkspaceRole,
  workspaceRoleLabel,
} from '../../../shared/utils/workspaceRole'
import { getSellerShop } from '../data/sellerShops'

export default function MypageWorkspaceCards() {
  const { user, isLoggedIn } = useAuth()
  if (!isLoggedIn) return null

  const role = resolveWorkspaceRole(user)
  const shop = getSellerShop(user?.sellerId)
  const isAdmin = canOpenAdminScope(role)
  const verifyNeeded = needsWorkshopVerify(user) || role === 'member'

  return (
    <section className="lounge-mypage-cards">
      {isAdmin ? (
        <Link to="/mypage/lounge" className="lounge-mypage-card lounge-mypage-card--admin">
          <p className="lounge-mypage-card__kicker">ADMIN</p>
          <h2>운영 콘솔</h2>
          <p>전체 입점 양조장을 조회합니다. 상단에서 공방을 고르세요.</p>
        </Link>
      ) : null}
      {canOpenLounge(role) && !needsWorkshopVerify(user) ? (
        <Link to="/mypage/lounge" className="lounge-mypage-card">
          <p className="lounge-mypage-card__kicker">{workspaceRoleLabel(role)}</p>
          <h2>셀러 라운지</h2>
          <p>{isAdmin ? '입점 공방 대시보드를 공방별로 조회합니다.' : `${shop?.name ?? '내 공방'}만 보입니다.`}</p>
        </Link>
      ) : null}
      {verifyNeeded && !isAdmin ? (
        <Link to="/mypage/lounge/verify" className="lounge-mypage-card">
          <p className="lounge-mypage-card__kicker">사업자 인증</p>
          <h2>내 공방 사전 지정</h2>
          <p>사업자등록번호로 인증하면 본인 양조장·공방만 라운지에 열립니다.</p>
        </Link>
      ) : null}
    </section>
  )
}
