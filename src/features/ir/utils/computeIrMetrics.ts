import { allProducts } from '../../../data/products'
import { brandStoryFunding, brandStoryPartners, brandStoryStats } from '../../brand/data/brandStory'
import { classSessions } from '../../brewery/data/classSessions'
import { BREWERIES, MAP_REGIONS } from '../../brewery/data/breweries'
import { CORPORATE_SETS } from '../../corporate/data/corporateOffers'
import { TIME_SALE_ITEMS } from '../../deals/data/timeSales'
import { HOLIDAY_GIFT_SETS } from '../../holidayGift/data/holidayGiftSets'
import { HOLIDAY_TOURS } from '../../holidayTour/data/holidayTours'
import { LIMITED_EDITION } from '../../limited/data/limitedEdition'
import { SUBSCRIBE_PLANS } from '../../subscribe/data/subscribePlans'
import type { IrKpi, IrMixRow, IrSnapshot } from '../types/ir'

function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0)
}

function parseWon(label: string): number {
  return Number(label.replace(/[^\d]/g, '')) || 0
}

function formatPeople(value: number): string {
  return `${value.toLocaleString()} 명`
}

function formatEok(won: number): string {
  return `₩${(won / 100_000_000).toFixed(1)}억`
}

function mixRow(id: string, label: string, amount: number, total: number): IrMixRow {
  return {
    id,
    label,
    amount,
    percent: total === 0 ? 0 : Math.round((amount / total) * 100),
  }
}

export function computeIrSnapshot(): IrSnapshot {
  const sku = allProducts.length
  const catalogValue = sum(allProducts.map((item) => item.price))
  const avgRating = sum(allProducts.map((item) => item.rating)) / sku
  const breweryN = BREWERIES.length
  const regionN = MAP_REGIONS.filter((item) => item.id !== 'all').length
  const classOpen = classSessions.filter((item) => !item.closed)
  const classValue = sum(classOpen.map((item) => item.price))
  const holidayValue = sum(HOLIDAY_GIFT_SETS.map((item) => item.price))
  const dealValue = sum(TIME_SALE_ITEMS.map((item) => item.sale))
  const limitedValue = LIMITED_EDITION.sale * LIMITED_EDITION.stock
  const subscribeArpu = Math.round(sum(SUBSCRIBE_PLANS.map((item) => item.price)) / SUBSCRIBE_PLANS.length)
  const corporateMid = sum(CORPORATE_SETS.map((item) => (item.priceFrom + item.priceTo) / 2))
  const uglyFarms = brandStoryStats.find((item) => item.label.includes('농가'))?.value ?? '48'
  const fundWon = sum(brandStoryFunding.map((item) => parseWon(item.amount)))

  const mau = sku * 850 + breweryN * 1100 + classOpen.length * 500 + HOLIDAY_GIFT_SETS.length * 220
  const d2c = Math.round(catalogValue * 0.18 * 12 + limitedValue + holidayValue * 1.6 + dealValue * 8 + corporateMid * 40)
  const sub = Math.round(subscribeArpu * mau * 0.042 * 12)
  const experience = Math.round(classValue * 36 + breweryN * 89_000 * 8 + sum(HOLIDAY_TOURS.map((item) => item.remain)) * 120_000)
  const gmv = d2c + sub + experience
  const mix = [
    mixRow('d2c', '한정판·마켓 D2C 온라인', d2c, gmv),
    mixRow('sub', '프리미엄 구독 큐레이션', sub, gmv),
    mixRow('exp', '양조장 투어·클래스 예약', experience, gmv),
  ]
  const nps = Math.round(((avgRating - 3) / 2) * 100)
  const retentionMonths = 9.5
  const churnDrop = 23

  const kpis: IrKpi[] = [
    { id: 'mau', label: '플랫폼 활성 사용자 (MAU)', value: formatPeople(mau), note: `SKU ${sku} · 양조장 ${breweryN}곳 · 클래스 ${classOpen.length}회에서 환산`, tone: 'gold' },
    { id: 'gmv', label: '누적 총 거래액 (GMV)', value: formatEok(gmv), note: '카탈로그 회전 + 한정판 재고 + 구독 ARPU + 체험 예약', tone: 'navy' },
    { id: 'ret', label: '정기구독 이탈 방지율 (MoM)', value: `+${churnDrop}%`, note: `평균 구독 유지 ${retentionMonths}개월 · 플랜 ARPU ${subscribeArpu.toLocaleString()}원`, tone: 'green' },
    { id: 'nps', label: '소비자 순 추천 지수 (NPS)', value: `${nps} 점`, note: `카탈로그 평균 별점 ${avgRating.toFixed(2)} / 5 환산`, tone: 'gold' },
  ]

  return {
    mau,
    gmv,
    nps,
    retentionMonths,
    churnDrop,
    sku,
    breweryN,
    classN: classOpen.length,
    limitedStock: LIMITED_EDITION.stock,
    mix,
    market: {
      tam: Math.round(gmv * 48),
      sam: Math.round(gmv * 9),
      som: Math.round(gmv * 1.8),
    },
    kpis,
    sources: [
      `마켓 ${sku}종 · 카탈로그 표시가 ${catalogValue.toLocaleString()}원`,
      `제휴 양조장 ${breweryN}곳 · 권역 ${regionN} · 파트너 ${brandStoryPartners.length}곳`,
      `한정판 ${LIMITED_EDITION.stock}병 × ${LIMITED_EDITION.sale.toLocaleString()}원`,
      `못난이 펀딩 ${fundWon.toLocaleString()}원 · 함께하는 농가 ${uglyFarms}`,
      `명절 세트 ${HOLIDAY_GIFT_SETS.length} · 타임특가 ${TIME_SALE_ITEMS.length} · 기업 세트 ${CORPORATE_SETS.length}`,
    ],
  }
}

export function formatEokLabel(won: number): string {
  return formatEok(won)
}
