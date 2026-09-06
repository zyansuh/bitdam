import type { NavLinkItem } from '../shared/types/navigation'
import { getCampaignNavLinks } from './campaignNav'

export const navLinks: NavLinkItem[] = [
  { label: '전통주', to: '/products' },
  { label: '선물하기', to: '/gift' },
  ...getCampaignNavLinks(),
  { label: '양조장', to: '/breweries' },
  { label: '기념주', to: '/custom' },
  { label: '클래스', to: '/classes' },
  { label: '스토리', to: '/story' },
  { label: '커뮤니티', to: '/community' },
  { label: '고객센터', to: '/help' },
]
