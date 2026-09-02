import { useState } from 'react'
import { readLastOrder } from '../../../shared/utils/orderStorage'
import type { LastOrder } from '../../../shared/types/order'

export function useLastOrder() {
  const [order] = useState<LastOrder | null>(() => readLastOrder())
  return order
}
