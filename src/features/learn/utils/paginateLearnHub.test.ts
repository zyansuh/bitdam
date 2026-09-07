import { describe, expect, it } from 'vitest'
import { paginateLearnHub } from './paginateLearnHub'

describe('paginateLearnHub', () => {
  it('slices ten items per page', () => {
    const items = Array.from({ length: 25 }, (_, index) => index)
    const first = paginateLearnHub(items, 1)
    expect(first.slice).toEqual(items.slice(0, 10))
    expect(first.pages).toBe(3)
    expect(paginateLearnHub(items, 3).slice).toEqual(items.slice(20, 25))
  })

  it('clamps a page that is out of range', () => {
    expect(paginateLearnHub([1, 2], 9).page).toBe(1)
    expect(paginateLearnHub([1, 2, 3], 0).page).toBe(1)
  })
})
