import { describe, expect, it } from 'vitest'
import { LEARN_TONE_COPY } from './learnToneCopy'

describe('LEARN_TONE_COPY', () => {
  it('keeps distill copy off home how-tos', () => {
    expect(LEARN_TONE_COPY.principle.body).toMatch(/면허/)
    expect(LEARN_TONE_COPY.principle.body).not.toMatch(/레시피대로 따라/)
  })

  it('keeps process copy as study not a sales recipe', () => {
    expect(LEARN_TONE_COPY.process.body).toMatch(/매뉴얼이 아니/)
  })
})
