import type { NavLinkItem } from '../shared/types/navigation'

export const settingsNav: NavLinkItem[] = [
  { label: '프로필 설정', to: '/account' },
  { label: '보안 & 비밀번호', to: '/account/security' },
  { label: '알림 설정', to: '/account/notifications' },
  { label: '연동된 서비스', to: '/account/connections' },
  { label: '탈퇴하기', to: '/account/withdraw' },
]
