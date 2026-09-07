import type { NavLinkItem } from '../shared/types/navigation'
import { settingsNav } from './settingsNav'

export const headerAccountLinks: NavLinkItem[] = [
  { label: '마이페이지', to: '/mypage' },
  { label: '위시리스트', to: '/wishlist' },
  { label: '알림 센터', to: '/notifications' },
]

export const hamburgerAccountLinks: NavLinkItem[] = [
  ...headerAccountLinks,
  { label: '고객센터', to: '/help' },
  { label: '1:1 문의', to: '/mypage/support' },
  ...settingsNav,
  { label: '공개 피드', to: '/community' },
  { label: '글쓰기', to: '/community/new' },
]
