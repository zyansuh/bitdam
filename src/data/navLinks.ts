import type { NavLinkItem } from '../shared/types/navigation'
import { getCampaignNavLinks } from './campaignNav'

export const navLinks: NavLinkItem[] = [
  { label: '전통주', to: '/products' },
  { label: '선물하기', to: '/gift' },
  ...getCampaignNavLinks(),
  { label: '기념주', to: '/custom' },
]
