import { useMemo, useState } from 'react'
import { useAuth } from './useAuth'
import { couponEffect } from '../utils/couponEffect'
import { couponsForUser, upsertWalletCoupon } from '../utils/couponStorage'
import type { WalletCoupon } from '../types/coupon'

export function useCouponWallet() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [tick, setTick] = useState(0)
  const coupons = useMemo(() => (userId ? couponsForUser(userId) : []), [userId, tick])
  const unused = coupons.filter((coupon) => !coupon.usedAt)

  function reload() {
    setTick((value) => value + 1)
  }

  function grant(coupon: Omit<WalletCoupon, 'userId'> & { userId?: string }) {
    if (!userId) return
    upsertWalletCoupon({ ...coupon, userId })
    reload()
  }

  return { coupons, unused, reload, grant, effect: couponEffect }
}
