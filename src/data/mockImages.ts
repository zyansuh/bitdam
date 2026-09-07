import heroPhoto from '../assets/hero.png'

export const MOCK_IMAGES = {
  placeholder: '/images/mock-bottle.svg',
  brewery: '/images/mock-brewery.svg',
  breweryHero: '/images/brewery-hero.svg',
  tourHero: '/images/tour-hero.svg',
  master: '/images/people/master.svg',
  hero: heroPhoto,
} as const

const CATEGORY_SLUG: Record<string, string> = {
  막걸리: 'makgeolli',
  약주: 'yakju',
  과실주: 'fruit',
  증류주: 'soju',
  리큐르: 'liqueur',
}

export function catalogPhoto(category: string, seed = 0): string {
  const slug = CATEGORY_SLUG[category] ?? 'soju'
  return `/images/catalog/${slug}-${(Math.abs(seed) % 3) + 1}.svg`
}

export function leaderPhoto(id: string): string {
  if (id === 'ceo' || id === 'cpo' || id === 'cdo' || id === 'coo') {
    return `/images/people/${id}.svg`
  }
  return MOCK_IMAGES.master
}

export type MockImageKey = keyof typeof MOCK_IMAGES
