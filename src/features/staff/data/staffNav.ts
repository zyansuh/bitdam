import type { LoungeNavItem } from '../../lounge/types/lounge'

export const staffNav: LoungeNavItem[] = [
  { label: '구성원 권한', to: '/mypage/admin/people' },
  { label: '직원 성과', to: '/mypage/admin/performance' },
  { label: '공방 라운지', to: '/mypage/lounge' },
  { label: '공지 작성', to: '/notices/new' },
  { label: '스토리', to: '/story' },
]
