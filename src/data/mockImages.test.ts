import { describe, expect, it } from 'vitest'
import { catalogPhoto, leaderPhoto, MOCK_IMAGES } from './mockImages'

describe('catalogPhoto', () => {
  it('returns a local svg for a known category', () => {
    expect(catalogPhoto('막걸리', 0)).toBe('/images/catalog/makgeolli-1.svg')
    expect(catalogPhoto('증류주', 4)).toBe('/images/catalog/soju-2.svg')
  })
})

describe('leaderPhoto', () => {
  it('maps known roles and falls back to the master plate', () => {
    expect(leaderPhoto('ceo')).toBe('/images/people/ceo.svg')
    expect(leaderPhoto('guest')).toBe(MOCK_IMAGES.master)
  })
})
