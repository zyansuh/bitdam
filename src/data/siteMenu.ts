import { BREWERIES, MAP_REGIONS } from '../features/brewery/data/breweries'
import { CATALOG_CATEGORIES } from '../features/catalog/data/categories'
import type { SiteMenuBranch, SiteMenuLinkItem } from '../shared/types/siteMenu'

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
      id: 'shop',
      label: '전통주',
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
      id: 'story',
      label: '이야기',
      to: '/story',
      items: [
        { label: '브랜드 스토리', to: '/story' },
        { label: '커뮤니티', to: '/community' },
        { label: '이벤트', to: '/' },
      ],
      clusters: [],
    },
  ]
}
