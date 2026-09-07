import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { headerAccountLinks } from '../../../data/headerAccountLinks'
import { settingsNav } from '../../../data/settingsNav'
import { useAccountMenu } from '../../hooks/useAccountMenu'
import { useAuth } from '../../hooks/useAuth'
import { canManagePeople, canOpenLounge, canViewStaffPerformance, resolveWorkspaceRole } from '../../utils/workspaceRole'
import { formatUserHonorific } from '../../utils/formatUserHonorific'
import LoginLink from './LoginLink'
import NavbarUserAvatar from './NavbarUserAvatar'
import SignupLink from './SignupLink'

interface AccountMenuProps {
  triggerClassName?: string
}

export default function AccountMenu({ triggerClassName }: AccountMenuProps) {
  const { user, isLoggedIn, logout } = useAuth()
  const { menuOpen, toggleMenu, closeMenu, rootRef } = useAccountMenu()
  const label = user ? formatUserHonorific(user.nickname) : '프로필 메뉴'

  return (
    <div className="account-menu" ref={rootRef}>
      <button
        type="button"
        className={triggerClassName ?? 'account-menu__trigger'}
        aria-label={label}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        {isLoggedIn ? (
          <>
            <NavbarUserAvatar src={user?.profileImage} alt={label} />
            <span className="navbar__user-name">{user ? formatUserHonorific(user.nickname) : ''}</span>
          </>
        ) : (
          <User size={20} strokeWidth={1.5} />
        )}
      </button>
      {menuOpen ? (
        <div className="account-menu__panel" role="menu">
          <p className="account-menu__label">내 계정</p>
          {headerAccountLinks.map((item) => (
            <Link key={item.to} to={item.to} className="account-menu__item" role="menuitem" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          {canOpenLounge(resolveWorkspaceRole(user)) ? (
            <Link to="/mypage/lounge" className="account-menu__item" role="menuitem" onClick={closeMenu}>
              셀러 라운지
            </Link>
          ) : null}
          {canManagePeople(resolveWorkspaceRole(user)) ? (
            <Link to="/mypage/admin/people" className="account-menu__item" role="menuitem" onClick={closeMenu}>
              구성원 권한
            </Link>
          ) : null}
          {canViewStaffPerformance(resolveWorkspaceRole(user)) ? (
            <Link to="/mypage/admin/performance" className="account-menu__item" role="menuitem" onClick={closeMenu}>
              직원 성과
            </Link>
          ) : null}
          <Link to="/help" className="account-menu__item" role="menuitem" onClick={closeMenu}>
            고객센터
          </Link>
          <p className="account-menu__label">개인정보 설정</p>
          {settingsNav.map((item) => (
            <Link key={item.to} to={item.to} className="account-menu__item" role="menuitem" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <p className="account-menu__label">커뮤니티</p>
          <Link to="/community" className="account-menu__item" role="menuitem" onClick={closeMenu}>
            내 글 목록
          </Link>
          {isLoggedIn ? (
            <button
              type="button"
              className="account-menu__item"
              role="menuitem"
              onClick={() => {
                closeMenu()
                logout()
              }}
            >
              로그아웃
            </button>
          ) : (
            <>
              <LoginLink className="account-menu__item" onClick={closeMenu}>
                로그인
              </LoginLink>
              <SignupLink className="account-menu__item" onClick={closeMenu}>
                회원가입
              </SignupLink>
            </>
          )}
        </div>
      ) : null}
    </div>
  )
}
