import { allProducts, type Product } from '../../../data/products'
import { getBreweryById } from '../data/breweries'
import { breweryProfiles } from '../data/breweryProfiles'
import type { BreweryDetail, BreweryProfile } from '../types/breweryDetail'

const fallbackPhoto =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&q=80'

function fallbackProfile(name: string, region: string, image: string, summary: string): BreweryProfile {
  return {
    subtitle: `${region} · 지역 도가`,
    heroTitle: name,
    heroImage: image.replace('w=400&h=280', 'w=1600&h=720'),
    storyTitle: `${name} 이야기`,
    story: [summary, '빚담이 도가와 직접 소통해 시즌 항아리만 골라 담습니다.'],
    masterName: `${name} 명인`,
    masterRole: '전수 명인',
    masterQuote: '한 해의 곡과 물이 같아야 술의 결도 같습니다.',
    masterPhoto: fallbackPhoto,
    awards: ['지역 우수 전통주'],
    programTitle: '체험 프로그램 안내',
    programDesc: '도가 해설과 대표주 테이스팅을 중심으로 한 방문 프로그램입니다.',
    programPrice: 35000,
    hours: '09:00 – 18:00',
    parking: '양조장 내 주차 가능',
  }
}

export function getBreweryDetail(id: string): BreweryDetail | undefined {
  const pin = getBreweryById(id)
  if (!pin) return undefined

  const profile = breweryProfiles[id] ?? fallbackProfile(pin.name, pin.region, pin.image, pin.summary)
  const products: Product[] = []
  const seen = new Set<string>()
  for (const item of allProducts) {
    if (item.region !== pin.region || seen.has(item.name)) continue
    seen.add(item.name)
    products.push(item)
    if (products.length === 2) break
  }

  return { ...pin, ...profile, products }
}
