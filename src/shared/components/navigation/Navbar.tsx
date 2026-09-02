import { navLinks } from '../../../data/navLinks'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import BrandLogo from '../brand/BrandLogo'
import NavbarActions from './NavbarActions'
import NavbarDesktopLinks from './NavbarDesktopLinks'
import NavbarMobileMenu from './NavbarMobileMenu'

export default function Navbar() {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <BrandLogo size="sm" />
        <NavbarDesktopLinks links={navLinks} />
        <NavbarActions menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      </div>
      {menuOpen && <NavbarMobileMenu links={navLinks} onClose={closeMenu} />}
    </header>
  )
}
