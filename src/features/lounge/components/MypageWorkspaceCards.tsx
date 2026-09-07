import { Link } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import {
  canOpenAdminScope,
  canOpenLounge,
  canPickAllShops,
  canViewStaffPerformance,
  canWriteNotice,
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

  return (
    <section className="lounge-mypage-cards">
      {isAdmin ? (
        <>
          <Link to="/mypage/admin/people" className="lounge-mypage-card lounge-mypage-card--admin">
            <p className="lounge-mypage-card__kicker">ADMIN</p>
            <h2>구성원 권한</h2>
            <p>가입 계정에 직원·팀장·ADMIN 등급을 부여합니다.</p>
          </Link>
          {canViewStaffPerformance(role) ? (
            <Link to="/mypage/admin/performance" className="lounge-mypage-card lounge-mypage-card--admin">
              <p className="lounge-mypage-card__kicker">ADMIN</p>
              <h2>직원 성과</h2>
              <p>팀장·직원의 공지 기여와 라운지 점검을 봅니다.</p>
            </Link>
          ) : null}
        </>
      ) : null}
      {canOpenLounge(role) && !needsWorkshopVerify(user) ? (
        <Link to="/mypage/lounge" className="lounge-mypage-card">
          <p className="lounge-mypage-card__kicker">{workspaceRoleLabel(role)}</p>
          <h2>{canPickAllShops(role) ? '공방 라운지' : '셀러 라운지'}</h2>
          <p>
            {canPickAllShops(role)
              ? '직원·팀장·ADMIN은 전체 공방을 골라 볼 수 있습니다.'
              : `${shop?.name ?? '내 공방'}만 보입니다.`}
          </p>
        </Link>
      ) : null}
      {canWriteNotice(role) ? (
        <Link to="/notices/new" className="lounge-mypage-card">
          <p className="lounge-mypage-card__kicker">{workspaceRoleLabel(role)}</p>
          <h2>공지 작성</h2>
          <p>{role === 'staff' ? '직원은 공지를 등록할 수 있습니다. 중요 공지는 팀장·ADMIN만 표시합니다.' : '공지와 중요 표시를 포함해 작성할 수 있습니다.'}</p>
        </Link>
      ) : null}
      {needsWorkshopVerify(user) || role === 'member' ? (
        <Link to="/mypage/lounge/verify" className="lounge-mypage-card">
          <p className="lounge-mypage-card__kicker">사업자 인증</p>
          <h2>내 공방 사전 지정</h2>
          <p>사업자등록번호로 인증하면 본인 양조장·공방만 라운지에 열립니다.</p>
        </Link>
      ) : null}
    </section>
  )
}
