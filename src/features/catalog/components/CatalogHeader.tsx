import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import BrandLogo from '../../../shared/components/brand/BrandLogo'
import ThemeToggle from '../../../shared/components/navigation/ThemeToggle'
import LoginLink from '../../../shared/components/navigation/LoginLink'
import { useAuth } from '../../../shared/hooks/useAuth'
import { useMobileMenu } from '../../../shared/hooks/useMobileMenu'
import { catalogLightLinks, catalogNavyLinks } from '../data/headerLinks'

export type CatalogHeaderVariant = 'light' | 'navy'

interface CatalogHeaderProps {
  variant?: CatalogHeaderVariant
}

export default function CatalogHeader({ variant = 'light' }: CatalogHeaderProps) {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const { isLoggedIn, logout } = useAuth()
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
          {!isNavy && (
            <button type="button" aria-label="검색" className="catalog-header__icon--light">
              <Search size={20} strokeWidth={1.5} />
            </button>
          )}
          <button
            type="button"
            aria-label="장바구니"
            className={`catalog-header__cart catalog-header__icon--${tone}`}
          >
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="catalog-header__badge">2</span>
          </button>
          {isNavy && !isLoggedIn && (
            <LoginLink className="catalog-header__signup">회원가입</LoginLink>
          )}
          {isLoggedIn ? (
            <button type="button" className="catalog-header__logout" onClick={logout}>
              로그아웃
            </button>
          ) : (
            <LoginLink className="catalog-header__login">로그인</LoginLink>
          )}
          <ThemeToggle className={`theme-toggle catalog-header__icon--${tone}`} />
          <button
            type="button"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className={`catalog-header__menu-button catalog-header__icon--${tone}`}
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className={`catalog-header__mobile catalog-header__mobile--${tone}`}>
          <ul className="catalog-header__mobile-list">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`catalog-header__mobile-link catalog-header__mobile-link--${tone}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
