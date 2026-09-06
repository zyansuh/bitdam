import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import BrandLogo from '../../../shared/components/brand/BrandLogo'
import AccountMenu from '../../../shared/components/navigation/AccountMenu'
import SiteHamburgerMenu from '../../../shared/components/navigation/SiteHamburgerMenu'
import ThemeToggle from '../../../shared/components/navigation/ThemeToggle'
import { useMobileMenu } from '../../../shared/hooks/useMobileMenu'
import { breweryNavLinks } from '../data/breweryNavLinks'

function isTourNavActive(pathname: string, to: string) {
  if (to === '/breweries') {
    return pathname === '/breweries' || pathname.startsWith('/breweries/')
  }
  return pathname === to
}

export default function BrewerySiteHeader() {
  const { pathname } = useLocation()
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <header className="brewery-header">
      <div className="brewery-header__inner">
        <BrandLogo size="sm" />
        <nav className="brewery-header__nav">
          {breweryNavLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={
                isTourNavActive(pathname, link.to)
                  ? 'brewery-header__link brewery-header__link--on'
                  : 'brewery-header__link'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="brewery-header__actions">
          <Link to="/products" aria-label="검색" className="brewery-header__icon">
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <button type="button" aria-label="장바구니" className="brewery-header__icon">
            <ShoppingCart size={20} strokeWidth={1.5} />
          </button>
          <AccountMenu triggerClassName="account-menu__trigger brewery-header__icon" />
          <ThemeToggle className="theme-toggle brewery-header__icon" />
          <button
            type="button"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            className="brewery-header__menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {menuOpen ? <SiteHamburgerMenu onClose={closeMenu} /> : null}
    </header>
  )
}
