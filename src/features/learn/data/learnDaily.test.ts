import { describe, expect, it } from 'vitest'
import { LEARN_ARTICLES } from './learnArticles'
import {
  formatLearnAddedOn,
  getLearnDailyIndex,
  getLearnReleaseDate,
  getLearnUnlockedCount,
} from './learnDaily'

describe('getLearnDailyIndex', () => {
  it('is stable for the same calendar day', () => {
    const a = getLearnDailyIndex(new Date('2026-03-01T10:00:00'), 100)
    const b = getLearnDailyIndex(new Date('2026-03-01T23:00:00'), 100)
    expect(a).toBe(b)
    expect(a).toBeGreaterThanOrEqual(0)
    expect(a).toBeLessThan(100)
  })

  it('adds the next catalog card on the next day', () => {
    const a = getLearnDailyIndex(new Date('2026-03-01T12:00:00'), 100)
    const b = getLearnDailyIndex(new Date('2026-03-02T12:00:00'), 100)
    expect(b).toBe((a + 1) % 100)
  })

  it('rotates after the catalog is fully unlocked', () => {
    expect(getLearnDailyIndex(new Date('2026-04-11T12:00:00'), 100)).toBe(0)
  })
})

describe('getLearnUnlockedCount', () => {
  it('grows by one card each day until the catalog is full', () => {
    expect(getLearnUnlockedCount(new Date('2026-01-01T12:00:00'), 100)).toBe(1)
    expect(getLearnUnlockedCount(new Date('2026-01-10T12:00:00'), 100)).toBe(10)
    expect(getLearnUnlockedCount(new Date('2026-09-08T12:00:00'), 100)).toBe(100)
  })

  it('stays empty before the start date', () => {
    expect(getLearnUnlockedCount(new Date('2025-12-31T12:00:00'), 100)).toBe(0)
  })
})

describe('formatLearnAddedOn', () => {
  it('labels the catalog start day', () => {
    expect(formatLearnAddedOn(getLearnReleaseDate(0))).toBe('2026. 1. 1. 추가')
  })
})

describe('LEARN_ARTICLES', () => {
  it('has one hundred catalog cards to unlock', () => {
    expect(LEARN_ARTICLES).toHaveLength(100)
  })
})
