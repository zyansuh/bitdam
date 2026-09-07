import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { upsertWalletCoupon } from '../../../shared/utils/couponStorage'
import { appendSiteNotice, makeSiteNotice } from '../../notify/utils/siteNoticeStorage'
import { COUPON_AMOUNT, COUPON_DAYS, STAMP_MAX } from '../data/dailyEventCopy'
import type { LuckyBagState } from '../types/dailyEvent'
import { addDaysIso, loadLuckyBag, saveLuckyBag, todayKey } from '../utils/luckyBagStorage'

function stamp(state: LuckyBagState): LuckyBagState {
  return { ...state, stamps: Math.min(STAMP_MAX, state.stamps + 1) }
}

export function useLuckyBag() {
  const [state, setState] = useState<LuckyBagState>(loadLuckyBag)
  const today = todayKey()
  const { user } = useAuth()

  function persist(next: LuckyBagState) {
    saveLuckyBag(next)
    setState(next)
  }

  function openBag() {
    if (state.lastOpen === today) return
    const expiresAt = addDaysIso(COUPON_DAYS)
    persist(
      stamp({
        ...state,
        lastOpen: today,
        coupon: {
          amount: COUPON_AMOUNT,
          issuedAt: new Date().toISOString(),
          expiresAt,
        },
      }),
    )
    if (user) {
      const expire = expiresAt.slice(0, 10).replace(/-/g, '.')
      upsertWalletCoupon({
        id: `${user.id}-LUCKY-${today}`,
        userId: user.id,
        code: 'LUCKY',
        name: `출석 ${COUPON_AMOUNT.toLocaleString()}원`,
        kind: 'amount',
        value: COUPON_AMOUNT,
        minAmount: 0,
        expire,
      })
      appendSiteNotice(
        makeSiteNotice({
          kind: 'event',
          title: `출석 쿠폰 ${COUPON_AMOUNT.toLocaleString()}원이 지급되었습니다`,
          body: `${expire}까지 장바구니에서 LUCKY 코드를 사용할 수 있습니다.`,
          actionLabel: '쿠폰 확인',
          actionTo: '/mypage/coupons',
          audienceId: user.id,
        }),
      )
    }
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
