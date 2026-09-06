import { getActiveHolidayEvent } from '../features/event/data/holidayEvents'
import type { NavLinkItem } from '../shared/types/navigation'

export function getCampaignNavLinks(): NavLinkItem[] {
  const holiday = getActiveHolidayEvent()
  return [
    { label: holiday.navLabel, to: `/events/${holiday.slug}` },
    { label: '타임 특가', to: '/deals' },
    { label: '정기 구독', to: '/subscribe' },
  ]
}
