import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { NavLinkItem } from '../../types/navigation'
import LoginLink from './LoginLink'
import SignupLink from './SignupLink'

interface NavbarMobileMenuProps {
  links: NavLinkItem[]
  onClose: () => void
}

export default function NavbarMobileMenu({ links, onClose }: NavbarMobileMenuProps) {
  const { isLoggedIn } = useAuth()

  return (
    <nav className="navbar__mobile">
      <ul className="navbar__mobile-list">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="navbar__mobile-link" onClick={onClose}>
              {link.label}
            </Link>
          </li>
        ))}
        {!isLoggedIn && (
          <>
            <li>
              <SignupLink className="navbar__mobile-link" onClick={onClose}>
                회원가입
              </SignupLink>
            </li>
            <li>
              <LoginLink className="navbar__mobile-link" onClick={onClose}>
                로그인
              </LoginLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
