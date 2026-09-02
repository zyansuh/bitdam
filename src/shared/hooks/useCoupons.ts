import { useContext } from 'react'
import { CouponContext } from '../providers/couponProvider'

export function useCoupons() {
  const context = useContext(CouponContext)
  if (!context) {
    throw new Error('useCoupons는 CouponProvider 안에서만 사용할 수 있습니다.')
  }
  return context
}
