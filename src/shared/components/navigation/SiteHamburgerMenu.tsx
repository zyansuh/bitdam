import { useRef } from 'react'
import { hamburgerAccountLinks } from '../../../data/headerAccountLinks'
import { getSiteMenuBranches } from '../../../data/siteMenu'
import { useAuth } from '../../hooks/useAuth'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import LoginLink from './LoginLink'
import SignupLink from './SignupLink'
import SiteMenuBranchSection from './SiteMenuBranchSection'
import SiteMenuLinkList from './SiteMenuLinkList'

export type SiteMenuTone = 'light' | 'navy'

interface SiteHamburgerMenuProps {
  onClose: () => void
  tone?: SiteMenuTone
}

export default function SiteHamburgerMenu({ onClose, tone = 'light' }: SiteHamburgerMenuProps) {
  const { isLoggedIn, logout } = useAuth()
  const menuRef = useRef<HTMLElement>(null)
  useFocusTrap(true, menuRef)
  const root = tone === 'navy' ? 'site-menu site-menu--navy' : 'site-menu'
  const accountItems = hamburgerAccountLinks

  return (
    <nav id="site-hamburger-menu" ref={menuRef} className={root} aria-label="전체 메뉴">
      <div className="site-menu__inner">
        {getSiteMenuBranches().map((branch) => (
          <SiteMenuBranchSection key={branch.id} branch={branch} onClose={onClose} />
        ))}
        <section className="site-menu__branch">
          <h2 className="site-menu__title">내 계정</h2>
          <SiteMenuLinkList items={accountItems} onClose={onClose} />
          <ul className="site-menu__list">
            {isLoggedIn ? (
              <li>
                <button
                  type="button"
                  className="site-menu__link site-menu__button"
                  onClick={() => {
                    onClose()
                    logout()
                  }}
                >
                  로그아웃
                </button>
              </li>
            ) : (
              <>
                <li>
                  <LoginLink className="site-menu__link" onClick={onClose}>
                    로그인
                  </LoginLink>
                </li>
                <li>
                  <SignupLink className="site-menu__link" onClick={onClose}>
                    회원가입
                  </SignupLink>
                </li>
              </>
            )}
          </ul>
        </section>
      </div>
    </nav>
  )
}
