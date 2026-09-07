import heroPhoto from '../assets/hero.png'

export const MOCK_IMAGES = {
  placeholder: '/images/mock-bottle.svg',
  brewery: '/images/mock-brewery.svg',
  hero: heroPhoto,
} as const

export type MockImageKey = keyof typeof MOCK_IMAGES
