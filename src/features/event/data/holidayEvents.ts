import type { HolidayEvent } from '../types/holidayEvent'

export const HOLIDAY_EVENTS: HolidayEvent[] = [
  {
    slug: 'chuseok',
    navLabel: '추석 특별전',
    badge: '추석 명절 한정 특별 이벤트',
    title: '보름달 아래 빚은 향기, 추석 한정 명인 선물세트 출시',
    lead: '국가유산 명인이 빚은 한 병을 보름달 아래 포개 담았습니다. 한정 수량 선물세트를 구매하고 소원을 적으면 당첨자를 추첨합니다.',
    endsAt: '2026-10-06T23:59:59+09:00',
    entries: 8431,
    heroImage:
      '/images/catalog/soju-1.svg',
    steps: [
      '추석 한정 선물세트를 주문합니다.',
      '보름달에게 전할 소원 한 줄을 남깁니다.',
      '당첨자 발표 후 경품을 배송합니다.',
    ],
    prizes: [
      {
        rank: '1등',
        title: '무형문화재 자필 친필 에디션',
        detail: '명인 친필 라벨 + 한산 소곡주 명인병 + 오동나무 함',
        extra: '당첨 경품: 친필 에디션 1세트',
      },
      {
        rank: '2등',
        title: '전통 청자 술상 식기 에디션',
        detail: '청자 잔 2조 + 술상 트레이 + 약주 한 병',
        extra: '당첨 경품: 청자 술상 세트',
      },
      {
        rank: '3등',
        title: '빚담 전통 프리미엄 안주 팩',
        detail: '한과 · 육포 · 견과 보자기 구성',
        extra: '당첨 경품: 프리미엄 안주 팩',
      },
    ],
    winners: [
      { prize: '1등', name: '임*혁', city: '서울', phone: '010-****-1284', date: '2026-02-14' },
      { prize: '2등', name: '박*연', city: '부산', phone: '010-****-5521', date: '2026-02-14' },
      { prize: '3등', name: '최*우', city: '대전', phone: '010-****-9033', date: '2026-02-14' },
    ],
    sets: [
      {
        id: 'moon',
        name: '보름달 명인 한상 세트',
        contents: '한산 소곡주 + 안동소주 미니 + 오동나무함 + 잔 2',
        priceFrom: 89000,
        priceTo: 128000,
        image: '/images/catalog/yakju-1.svg',
      },
      {
        id: 'family',
        name: '가문 시그니처 추석 세트',
        contents: '약주 2병 + 보자기 + 한과 박스',
        priceFrom: 55000,
        priceTo: 89000,
        image: '/images/catalog/fruit-1.svg',
      },
      {
        id: 'fruit',
        name: '못난이 과일 보름 세트',
        contents: '과실주 2종 + 곶감 · 호두 페어링',
        priceFrom: 42000,
        priceTo: 68000,
        image: '/images/catalog/makgeolli-1.svg',
      },
    ],
    active: true,
  },
  {
    slug: 'seollal',
    navLabel: '설날 특별전',
    badge: '설 명절 한정 특별 이벤트',
    title: '새해 첫 잔, 설 한정 명인 선물세트',
    lead: '세뱃돈 대신 한 잔의 이야기. 설 연휴에만 열리는 명인 세트와 응모 이벤트입니다.',
    endsAt: '2027-02-16T23:59:59+09:00',
    entries: 2104,
    heroImage:
      '/images/catalog/liqueur-1.svg',
    steps: [
      '설 한정 선물세트를 주문합니다.',
      '새해 소원을 한 줄 남깁니다.',
      '당첨자 발표 후 경품을 배송합니다.',
    ],
    prizes: [
      {
        rank: '1등',
        title: '설 명인 친필 세트',
        detail: '친필 라벨 증류주 + 목함',
        extra: '당첨 경품: 친필 세트',
      },
      {
        rank: '2등',
        title: '세배상 청자 세트',
        detail: '청자 잔 + 약주',
        extra: '당첨 경품: 청자 세트',
      },
      {
        rank: '3등',
        title: '빚담 한과 보자기',
        detail: '전통 한과 보자기 팩',
        extra: '당첨 경품: 한과 팩',
      },
    ],
    winners: [],
    sets: [
      {
        id: 'new-year',
        name: '설 세배 명인 세트',
        contents: '증류주 + 약주 + 목함',
        priceFrom: 72000,
        priceTo: 110000,
        image: '/images/brewery-hero.svg',
      },
    ],
    active: false,
  },
]

export function getHolidayEvent(slug: string): HolidayEvent | undefined {
  return HOLIDAY_EVENTS.find((item) => item.slug === slug)
}

export function getActiveHolidayEvent(): HolidayEvent {
  return HOLIDAY_EVENTS.find((item) => item.active) ?? HOLIDAY_EVENTS[0]
}
