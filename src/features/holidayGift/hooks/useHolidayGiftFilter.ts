import { useMemo, useState } from 'react'
import { HOLIDAY_GIFT_SETS } from '../data/holidayGiftSets'
import type { GiftCompose, GiftOccasion, GiftPriceBand, GiftRecipient } from '../types/holidayGift'

export function useHolidayGiftFilter() {
  const [occasion, setOccasion] = useState<GiftOccasion>('all')
  const [prices, setPrices] = useState<GiftPriceBand[]>([])
  const [composes, setComposes] = useState<GiftCompose[]>([])
  const [recipients, setRecipients] = useState<GiftRecipient[]>([])

  const items = useMemo(() => {
    return HOLIDAY_GIFT_SETS.filter((item) => {
      const occOk = occasion === 'all' || item.occasion === occasion
      const priceOk = prices.length === 0 || prices.includes(item.priceBand)
      const composeOk = composes.length === 0 || composes.includes(item.compose)
      const recOk = recipients.length === 0 || recipients.includes(item.recipient)
      return occOk && priceOk && composeOk && recOk
    })
  }, [occasion, prices, composes, recipients])

  function toggle<T>(list: T[], value: T, set: (next: T[]) => void) {
    set(list.includes(value) ? list.filter((item) => item !== value) : [...list, value])
  }

  return {
    occasion,
    prices,
    composes,
    recipients,
    items,
    setOccasion,
    togglePrice: (value: GiftPriceBand) => toggle(prices, value, setPrices),
    toggleCompose: (value: GiftCompose) => toggle(composes, value, setComposes),
    toggleRecipient: (value: GiftRecipient) => toggle(recipients, value, setRecipients),
  }
}
