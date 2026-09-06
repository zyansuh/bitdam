import { useMemo, useState } from 'react'
import { TIME_SALE_ITEMS } from '../data/timeSales'
import type { DealCategory, DealDiscountBand } from '../types/timeSale'

export function useTimeSaleFilter() {
  const [category, setCategory] = useState<DealCategory>('all')
  const [band, setBand] = useState<DealDiscountBand>('all')

  const items = useMemo(() => {
    return TIME_SALE_ITEMS.filter((item) => {
      const catOk = category === 'all' || item.category === category
      const bandOk =
        band === 'all' ||
        (band === '30' && item.discount >= 30) ||
        (band === '20' && item.discount >= 20 && item.discount < 30) ||
        (band === '10' && item.discount >= 10 && item.discount < 20)
      return catOk && bandOk
    })
  }, [category, band])

  return { category, band, items, setCategory, setBand }
}
