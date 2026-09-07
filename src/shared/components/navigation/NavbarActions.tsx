import { Link } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import ThemeToggle from './ThemeToggle'
import SignupLink from './SignupLink'
import AccountMenu from './AccountMenu'
import CartLink from './CartLink'
import WishlistLink from './WishlistLink'

interface NavbarActionsProps {
  menuOpen: boolean
  onToggleMenu: () => void
}

export default function NavbarActions({ menuOpen, onToggleMenu }: NavbarActionsProps) {
  const { isLoggedIn } = useAuth()

  return (
    <div className="navbar__actions">
      {!isLoggedIn ? (
        <SignupLink className="navbar__signup">회원가입</SignupLink>
      ) : null}
      <Link to="/custom" className="navbar__cta">
        기념주 제작하기
      </Link>
      <Link to="/products" aria-label="검색" className="navbar__icon">
        <Search size={20} strokeWidth={1.5} />
      </Link>
      <ThemeToggle />
      <WishlistLink className="navbar__cart" badgeClassName="navbar__cart-dot" />
      <CartLink className="navbar__cart" badgeClassName="navbar__cart-dot" />
      <AccountMenu triggerClassName="account-menu__trigger navbar__account" />
      <button
        type="button"
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={menuOpen}
        aria-controls="site-hamburger-menu"
        className="navbar__menu-button"
        onClick={onToggleMenu}
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>
    </div>
  )
}
