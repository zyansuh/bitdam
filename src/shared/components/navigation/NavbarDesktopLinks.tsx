import { Link } from 'react-router-dom'
import type { NavLinkItem } from '../../types/navigation'

interface NavbarDesktopLinksProps {
  links: NavLinkItem[]
  isActive?: (to: string) => boolean
}

export default function NavbarDesktopLinks({ links, isActive }: NavbarDesktopLinksProps) {
  return (
    <nav className="navbar__desktop">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.to}
          className={isActive?.(link.to) ? 'navbar__link navbar__link--on' : 'navbar__link'}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
