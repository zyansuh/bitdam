import { useState } from 'react'
import { COUPON_AMOUNT, COUPON_DAYS, STAMP_MAX } from '../data/dailyEventCopy'
import type { LuckyBagState } from '../types/dailyEvent'
import { addDaysIso, loadLuckyBag, saveLuckyBag, todayKey } from '../utils/luckyBagStorage'

function stamp(state: LuckyBagState): LuckyBagState {
  return { ...state, stamps: Math.min(STAMP_MAX, state.stamps + 1) }
}

export function useLuckyBag() {
  const [state, setState] = useState<LuckyBagState>(loadLuckyBag)
  const today = todayKey()

  function persist(next: LuckyBagState) {
    saveLuckyBag(next)
    setState(next)
  }

  function openBag() {
    if (state.lastOpen === today) return
    persist(
      stamp({
        ...state,
        lastOpen: today,
        coupon: {
          amount: COUPON_AMOUNT,
          issuedAt: new Date().toISOString(),
          expiresAt: addDaysIso(COUPON_DAYS),
        },
      }),
    )
  }

  function awardShareStamp() {
    if (state.lastShare === today) return
    persist(stamp({ ...state, lastShare: today }))
  }

  return {
    state,
    openedToday: state.lastOpen === today,
    sharedToday: state.lastShare === today,
    openBag,
    awardShareStamp,
  }
}
