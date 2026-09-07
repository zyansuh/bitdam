import { describe, expect, it } from 'vitest'
import { canHearOrderAlerts } from './workspaceRole'

describe('canHearOrderAlerts', () => {
  it('allows admin lead and staff', () => {
    expect(canHearOrderAlerts('admin')).toBe(true)
    expect(canHearOrderAlerts('lead')).toBe(true)
    expect(canHearOrderAlerts('staff')).toBe(true)
  })

  it('hides toasts from seller and member', () => {
    expect(canHearOrderAlerts('seller')).toBe(false)
    expect(canHearOrderAlerts('member')).toBe(false)
  })
})
