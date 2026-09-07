import { describe, expect, it } from 'vitest'
import { slugifyLearnTitle } from './slugifyLearnTitle'

describe('slugifyLearnTitle', () => {
  it('prefixes ai slugs', () => {
    expect(slugifyLearnTitle('효모는 향을 어디에 남길까?')).toMatch(/^ai-/)
  })
})
