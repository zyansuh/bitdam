import { createContext, useMemo, useState, type ReactNode } from 'react'
import { findCatalogCoupon } from '../../data/coupons'
import type { Coupon } from '../types/coupon'
import { readCoupons, writeCoupons } from '../utils/couponStorage'

interface RegisterResult {
  ok: boolean
  message: string
  coupon?: Coupon
}

interface CouponContextValue {
  coupons: Coupon[]
  availableCount: number
  usedCount: number
  expiredCount: number
  registerCode: (code: string) => RegisterResult
  markUsed: (id: string) => void
  findAvailable: (code: string) => Coupon | undefined
}

export const CouponContext = createContext<CouponContextValue | null>(null)

interface CouponProviderProps {
  children: ReactNode
}

export function CouponProvider({ children }: CouponProviderProps) {
  const [coupons, setCoupons] = useState<Coupon[]>(() => {
    const initial = readCoupons()
    writeCoupons(initial)
    return initial
  })

  function commit(next: Coupon[]) {
    writeCoupons(next)
    setCoupons(next)
  }

  const value = useMemo<CouponContextValue>(
    () => ({
      coupons,
      availableCount: coupons.filter((item) => item.status === 'available').length,
      usedCount: coupons.filter((item) => item.status === 'used').length,
      expiredCount: coupons.filter((item) => item.status === 'expired').length,
      findAvailable: (code) =>
        coupons.find(
          (item) => item.code === code.trim().toUpperCase() && item.status === 'available',
        ),
      registerCode: (code) => {
        const catalog = findCatalogCoupon(code)
        if (!catalog) {
          return { ok: false, message: '등록할 수 없는 쿠폰 코드입니다.' }
        }
        const owned = coupons.find(
          (item) => item.code === catalog.code && item.status === 'available',
        )
        if (owned) {
          return { ok: true, message: '이미 보유한 쿠폰입니다.', coupon: owned }
        }
        const next: Coupon = { ...catalog, id: `c-${Date.now()}`, status: 'available' }
        commit([next, ...coupons])
        return { ok: true, message: `${catalog.title}이 등록되었습니다.`, coupon: next }
      },
      markUsed: (id) => {
        commit(
          coupons.map((item) => (item.id === id ? { ...item, status: 'used' } : item)),
        )
      },
    }),
    [coupons],
  )

  return <CouponContext.Provider value={value}>{children}</CouponContext.Provider>
}
