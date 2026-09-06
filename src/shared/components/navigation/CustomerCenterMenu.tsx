import { Link } from 'react-router-dom'
import { settingsNav } from '../../../features/account/data/settingsNav'
import { useAccountMenu } from '../../hooks/useAccountMenu'
import { useAuth } from '../../hooks/useAuth'
import LoginLink from './LoginLink'

interface CustomerCenterMenuProps {
  triggerClassName?: string
}

export default function CustomerCenterMenu({ triggerClassName }: CustomerCenterMenuProps) {
  const { isLoggedIn } = useAuth()
  const { menuOpen, toggleMenu, closeMenu, rootRef } = useAccountMenu()

  return (
    <div className="account-menu" ref={rootRef}>
      <button type="button" className={triggerClassName ?? 'navbar__link'} aria-expanded={menuOpen} onClick={toggleMenu}>
        고객센터
      </button>
      {menuOpen ? (
        <div className="account-menu__panel" role="menu">
          <p className="account-menu__label">고객센터</p>
          <Link to="/mypage/support" className="account-menu__item" role="menuitem" onClick={closeMenu}>
            1:1 고객센터
          </Link>
          <p className="account-menu__label">개인정보 설정</p>
          {settingsNav.map((item) => (
            <Link key={item.to} to={item.to} className="account-menu__item" role="menuitem" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          {!isLoggedIn ? (
            <LoginLink className="account-menu__item" onClick={closeMenu}>
              로그인
            </LoginLink>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
