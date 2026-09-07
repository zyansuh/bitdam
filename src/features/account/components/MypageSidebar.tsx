import { useAuth } from '../../../shared/hooks/useAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import { canOpenLounge, resolveWorkspaceRole, workspaceRoleLabel } from '../../../shared/utils/workspaceRole'
import { mypageNav } from '../data/mypageNav'
import AccountNavList from './AccountNavList'

export default function MypageSidebar() {
  const { user } = useAuth()
  const name = user ? formatUserHonorific(user.nickname) : '게스트'
  const role = resolveWorkspaceRole(user)
  const items = canOpenLounge(role)
    ? [{ label: '셀러 라운지', to: '/mypage/lounge' }, ...mypageNav]
    : mypageNav

  return (
    <aside className="account-aside">
      <section className="mypage-profile">
        {user?.profileImage ? (
          <img src={user.profileImage} alt="" className="mypage-profile__photo" referrerPolicy="no-referrer" />
        ) : (
          <span className="mypage-profile__photo mypage-profile__photo--empty" />
        )}
        <h2 className="mypage-profile__name">{name}</h2>
        <p className="mypage-profile__level">{workspaceRoleLabel(role)}</p>
        <p className="mypage-profile__points">잔여 포인트 4,500P</p>
      </section>
      <AccountNavList items={items} endPaths={['/mypage']} />
    </aside>
  )
}
