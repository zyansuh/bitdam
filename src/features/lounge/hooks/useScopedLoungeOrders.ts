import { useMemo } from 'react'
import { LOUNGE_ORDERS } from '../data/loungeRecords'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'
import { shopOrdersToLoungeRows } from '../utils/shopOrdersToLoungeRows'

export function useScopedLoungeOrders() {
  const { scopeId } = useLoungeScope()
  return useMemo(() => {
    const live = shopOrdersToLoungeRows()
    return inSellerScope([...live, ...LOUNGE_ORDERS], sellerIdsForScope(scopeId))
  }, [scopeId])
}
