import type { LuckyBagState } from '../types/dailyEvent'

const KEY = 'bitdam-lucky-bag'

const empty: LuckyBagState = {
  stamps: 0,
  lastOpen: '',
  lastShare: '',
  coupon: null,
}

export function todayKey(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export function addDaysIso(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toISOString()
}

export function loadLuckyBag(): LuckyBagState {
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? { ...empty, ...JSON.parse(raw) } : empty
  } catch {
    return empty
  }
}

export function saveLuckyBag(state: LuckyBagState) {
  window.localStorage.setItem(KEY, JSON.stringify(state))
}
