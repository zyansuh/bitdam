import { useState } from 'react'
import type { CouponStatus } from '../../../shared/types/coupon'

export function useCouponTab(initial: CouponStatus = 'available') {
  const [tab, setTab] = useState<CouponStatus>(initial)
  return { tab, setTab }
}
