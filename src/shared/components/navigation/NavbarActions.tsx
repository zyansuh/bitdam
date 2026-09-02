import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { formatUserHonorific } from '../../utils/formatUserHonorific'
import ThemeToggle from './ThemeToggle'
import LoginLink from './LoginLink'
import NavbarUserAvatar from './NavbarUserAvatar'

interface NavbarActionsProps {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function NavbarActions({ menuOpen, onToggleMenu }: NavbarActionsProps) {
  const { user, isLoggedIn, logout } = useAuth()

  return (
    <div className="navbar__actions">
      <Link to="/products" aria-label="검색" className="navbar__icon">
        <Search size={20} strokeWidth={1.5} />
      </Link>
      <button type="button" aria-label="장바구니" className="navbar__cart">
        <ShoppingCart size={20} strokeWidth={1.5} />
        <span className="navbar__cart-dot" />
      </button>
      {isLoggedIn ? (
        <button
          type="button"
          aria-label={`${user ? formatUserHonorific(user.nickname) : ''} 로그아웃`}
          className="navbar__account"
          onClick={logout}
        >
          <NavbarUserAvatar
            src={user?.profileImage}
            alt={user ? formatUserHonorific(user.nickname) : '프로필'}
          />
          <span className="navbar__user-name">
            {user ? formatUserHonorific(user.nickname) : ''}
          </span>
        </button>
      ) : (
        <LoginLink aria-label="로그인" className="navbar__icon">
          <User size={20} strokeWidth={1.5} />
        </LoginLink>
      )}
      <ThemeToggle />
      <button
        type="button"
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        className="navbar__menu-button"
        onClick={onToggleMenu}
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>
    </div>
  )
}
