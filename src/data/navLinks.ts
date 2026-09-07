import type { NavLinkItem } from '../shared/types/navigation'
import { getCampaignNavLinks } from './campaignNav'

export const navLinks: NavLinkItem[] = [
  { label: '전통주', to: '/products' },
  { label: '선물하기', to: '/gift' },
  { label: '추석 특별관', to: '/holiday/gifts' },
  { label: '설날 복주머니', to: '/events/daily' },
  { label: '명절 투어', to: '/holiday/tours' },
  ...getCampaignNavLinks(),
  { label: '기념주', to: '/custom' },
]
