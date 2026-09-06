import { useAuth } from '../../../shared/hooks/useAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import { mypageNav } from '../data/mypageNav'
import AccountNavList from './AccountNavList'

export default function MypageSidebar() {
  const { user } = useAuth()
  const name = user ? formatUserHonorific(user.nickname) : '게스트'

  return (
    <aside className="account-aside">
      <section className="mypage-profile">
        {user?.profileImage ? (
          <img src={user.profileImage} alt="" className="mypage-profile__photo" referrerPolicy="no-referrer" />
        ) : (
          <span className="mypage-profile__photo mypage-profile__photo--empty" />
        )}
        <h2 className="mypage-profile__name">{name}</h2>
        <p className="mypage-profile__level">일반 Lv.3</p>
        <p className="mypage-profile__points">잔여 포인트 4,500P</p>
      </section>
      <AccountNavList items={mypageNav} endPaths={['/mypage']} />
    </aside>
  )
}
