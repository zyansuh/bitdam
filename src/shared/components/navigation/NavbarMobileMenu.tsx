import { Link } from 'react-router-dom'
import type { NavLinkItem } from '../../types/navigation'

interface NavbarMobileMenuProps {
  links: NavLinkItem[]
  onClose: () => void
}

export default function NavbarMobileMenu({ links, onClose }: NavbarMobileMenuProps) {
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
      </ul>
    </nav>
  )
}
