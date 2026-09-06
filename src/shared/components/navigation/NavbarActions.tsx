import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import ThemeToggle from './ThemeToggle'
import SignupLink from './SignupLink'
import AccountMenu from './AccountMenu'

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
      <button type="button" aria-label="장바구니" className="navbar__cart">
        <ShoppingCart size={20} strokeWidth={1.5} />
        <span className="navbar__cart-dot" />
      </button>
      <AccountMenu triggerClassName="account-menu__trigger navbar__account" />
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
