import { describe, expect, it } from 'vitest'
import { getLearnDailyIndex } from './learnDaily'

describe('getLearnDailyIndex', () => {
  it('is stable for the same calendar day', () => {
    const a = getLearnDailyIndex(new Date('2026-03-01T10:00:00'), 100)
    const b = getLearnDailyIndex(new Date('2026-03-01T23:00:00'), 100)
    expect(a).toBe(b)
    expect(a).toBeGreaterThanOrEqual(0)
    expect(a).toBeLessThan(100)
  })

  it('moves on the next day', () => {
    const a = getLearnDailyIndex(new Date('2026-03-01T12:00:00'), 100)
    const b = getLearnDailyIndex(new Date('2026-03-02T12:00:00'), 100)
    expect(b).toBe((a + 1) % 100)
  })
})
