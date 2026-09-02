import {
  MEMBERSHIP_SPEND,
  MEMBERSHIP_TIERS,
} from '../data/membership'

export function useMembershipProfile() {
  const current = [...MEMBERSHIP_TIERS]
    .sort((a, b) => b.minSpend - a.minSpend)
    .find((tier) => MEMBERSHIP_SPEND >= tier.minSpend)

  const next = [...MEMBERSHIP_TIERS]
    .sort((a, b) => a.minSpend - b.minSpend)
    .find((tier) => tier.minSpend > MEMBERSHIP_SPEND)

  const remain = next ? Math.max(0, next.minSpend - MEMBERSHIP_SPEND) : 0
  const progress = next
    ? Math.min(100, Math.round((MEMBERSHIP_SPEND / next.minSpend) * 100))
    : 100

  return {
    current,
    next,
    remain,
    progress,
    spend: MEMBERSHIP_SPEND,
  }
}
