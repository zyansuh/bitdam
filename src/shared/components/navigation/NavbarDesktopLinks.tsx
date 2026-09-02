import { Link } from 'react-router-dom'
import type { NavLinkItem } from '../../types/navigation'

interface NavbarDesktopLinksProps {
  links: NavLinkItem[]
}

export default function NavbarDesktopLinks({ links }: NavbarDesktopLinksProps) {
  return (
    <nav className="navbar__desktop">
      {links.map((link) => (
        <Link key={link.label} to={link.to} className="navbar__link">
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
