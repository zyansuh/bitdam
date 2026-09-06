import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { useAccountMenu } from '../../hooks/useAccountMenu'
import { useAuth } from '../../hooks/useAuth'
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
