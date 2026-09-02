import type { Coupon } from '../types/coupon'
import { COUPON_WALLET_SEED } from '../../data/coupons'

const STORAGE_KEY = 'bitdam.coupons'

export function readCoupons(): Coupon[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return COUPON_WALLET_SEED
    }
    const parsed = JSON.parse(raw) as Coupon[]
    return Array.isArray(parsed) ? parsed : COUPON_WALLET_SEED
  } catch {
    return COUPON_WALLET_SEED
  }
}

export function writeCoupons(coupons: Coupon[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(coupons))
}
