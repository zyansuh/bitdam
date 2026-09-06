import { getSiteMenuBranches } from '../../../data/siteMenu'
import { useAuth } from '../../hooks/useAuth'
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
  const root = tone === 'navy' ? 'site-menu site-menu--navy' : 'site-menu'
  const accountItems = [
    { label: '마이페이지', to: '/mypage' },
    { label: '1:1 고객센터', to: '/mypage/support' },
    { label: '프로필 설정', to: '/account' },
    { label: '보안 & 비밀번호', to: '/account/security' },
    { label: '알림 설정', to: '/account/notifications' },
    { label: '연동된 서비스', to: '/account/connections' },
    { label: '탈퇴하기', to: '/account/withdraw' },
    { label: '내 글 목록', to: '/community' },
    { label: '글쓰기', to: '/community/new' },
  ]

  return (
    <nav className={root} aria-label="전체 메뉴">
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
