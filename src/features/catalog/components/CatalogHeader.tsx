import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import BrandLogo from '../../../shared/components/brand/BrandLogo'
import AccountMenu from '../../../shared/components/navigation/AccountMenu'
import SiteHamburgerMenu from '../../../shared/components/navigation/SiteHamburgerMenu'
import SignupLink from '../../../shared/components/navigation/SignupLink'
import ThemeToggle from '../../../shared/components/navigation/ThemeToggle'
import { useAuth } from '../../../shared/hooks/useAuth'
import { useMobileMenu } from '../../../shared/hooks/useMobileMenu'
import { catalogLightLinks, catalogNavyLinks } from '../data/headerLinks'

export type CatalogHeaderVariant = 'light' | 'navy'

interface CatalogHeaderProps {
  variant?: CatalogHeaderVariant
}

export default function CatalogHeader({ variant = 'light' }: CatalogHeaderProps) {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const { isLoggedIn } = useAuth()
  const isNavy = variant === 'navy'
  const tone = isNavy ? 'navy' : 'light'
  const links = isNavy ? catalogNavyLinks : catalogLightLinks

  return (
    <header className={`catalog-header catalog-header--${tone}`}>
      <div className="catalog-header__inner">
        <BrandLogo size="sm" nameTone={isNavy ? 'navy' : 'default'} />
        <nav className="catalog-header__nav">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`catalog-header__link catalog-header__link--${tone}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="catalog-header__actions">
          <Link
            to="/products"
            aria-label="검색"
            className={`catalog-header__icon--${tone}`}
          >
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <button
            type="button"
            aria-label="장바구니"
            className={`catalog-header__cart catalog-header__icon--${tone}`}
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="catalog-header__badge">2</span>
          </button>
          {!isLoggedIn && (
            <SignupLink className={`catalog-header__signup catalog-header__signup--${tone}`}>
              회원가입
            </SignupLink>
          )}
          <AccountMenu triggerClassName={`account-menu__trigger catalog-header__icon--${tone}`} />
          <ThemeToggle className={`theme-toggle catalog-header__icon--${tone}`} />
          <button
            type="button"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            className={`catalog-header__menu-button catalog-header__icon--${tone}`}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {menuOpen ? <SiteHamburgerMenu onClose={closeMenu} tone={tone} /> : null}
    </header>
  )
}
