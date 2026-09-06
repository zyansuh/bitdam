import { BREWERIES, MAP_REGIONS } from '../features/brewery/data/breweries'
import { CATALOG_CATEGORIES } from '../features/catalog/data/categories'
import type { SiteMenuBranch, SiteMenuLinkItem } from '../shared/types/siteMenu'
import { helpNav } from './helpNav'

const shopItems: SiteMenuLinkItem[] = [
  { label: '전체상품', to: '/products' },
  ...CATALOG_CATEGORIES.map((category) => ({
    label: category.label,
    to: `/category/${category.slug}`,
  })),
]

export function getSiteMenuBranches(): SiteMenuBranch[] {
  return [
    {
      id: 'gift',
      label: '선물 · 특가',
      to: '/gift',
      items: [
        { label: '선물하기', to: '/gift' },
        { label: '추석 특별전', to: '/events/chuseok' },
        { label: '설날 특별전', to: '/events/seollal' },
      ],
      clusters: [],
    },
    {
      id: 'shop',
      label: '전통주 마켓',
      to: '/products',
      items: shopItems,
      clusters: [],
    },
    {
      id: 'brewery',
      label: '양조장 투어',
      to: '/breweries',
      items: [
        { label: '전국 지도', to: '/breweries' },
        { label: '투어 예약', to: '/tours' },
        { label: '클래스 예약', to: '/classes' },
      ],
      clusters: MAP_REGIONS.filter((region) => region.id !== 'all')
        .map((region) => ({
          id: region.id,
          label: region.label,
          items: BREWERIES.filter((item) => item.regionId === region.id).map((item) => ({
            label: item.name,
            to: `/breweries/${item.id}`,
            note: item.region,
          })),
        }))
        .filter((cluster) => cluster.items.length > 0),
    },
    {
      id: 'custom',
      label: '기념주',
      to: '/custom',
      items: [
        { label: '기념주 제작하기', to: '/custom' },
        { label: '라벨 맞춤 단계', to: '/custom' },
        { label: '못난이 과일 스토리', to: '/story' },
      ],
      clusters: [],
    },
    {
      id: 'story',
      label: '이야기',
      to: '/story',
      items: [
        { label: '브랜드 스토리', to: '/story' },
        { label: '글 목록', to: '/community' },
        { label: '글쓰기', to: '/community/new' },
        { label: '명절 특별전', to: '/events/chuseok' },
      ],
      clusters: [],
    },
    {
      id: 'help',
      label: '고객센터',
      to: '/help',
      items: [
        { label: '공지사항', to: '/notices' },
        { label: '공지 모아보기', to: '/notices/digest' },
        { label: 'AI 추천', to: '/chat' },
        { label: '알림 센터', to: '/notifications' },
        { label: '1:1 문의', to: '/mypage/support' },
        ...helpNav,
      ],
      clusters: [],
    },
  ]
}
