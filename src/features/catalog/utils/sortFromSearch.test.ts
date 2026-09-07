import { describe, expect, it } from 'vitest'
import { parseSortKey } from './sortFromSearch'

describe('parseSortKey', () => {
  it('keeps a known sort key', () => {
    expect(parseSortKey('priceAsc')).toBe('priceAsc')
    expect(parseSortKey('newest')).toBe('newest')
  })

  it('falls back to popular', () => {
    expect(parseSortKey(null)).toBe('popular')
    expect(parseSortKey('nope')).toBe('popular')
  })
})
