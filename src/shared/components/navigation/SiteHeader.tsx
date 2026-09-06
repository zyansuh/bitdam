import BrandLogo from '../brand/BrandLogo'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import type { NavLinkItem } from '../../types/navigation'
import NavbarActions from './NavbarActions'
import NavbarDesktopLinks from './NavbarDesktopLinks'
import SiteHamburgerMenu from './SiteHamburgerMenu'

export type SiteHeaderTone = 'light' | 'navy'

interface SiteHeaderProps {
  links: NavLinkItem[]
  tone?: SiteHeaderTone
  isLinkActive?: (to: string) => boolean
}

export default function SiteHeader({ links, tone = 'light', isLinkActive }: SiteHeaderProps) {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const root = tone === 'navy' ? 'navbar navbar--navy' : 'navbar'

  return (
    <header className={root}>
      <div className="navbar__inner">
        <BrandLogo size="sm" nameTone={tone === 'navy' ? 'navy' : 'default'} />
        <NavbarDesktopLinks links={links} isActive={isLinkActive} />
        <NavbarActions menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      </div>
      {menuOpen ? <SiteHamburgerMenu onClose={closeMenu} tone={tone} /> : null}
    </header>
  )
}
