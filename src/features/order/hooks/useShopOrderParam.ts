import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShopOrder } from '../../../shared/utils/shopOrderStorage'

export function useShopOrderParam() {
  const { id = '' } = useParams()
  const [tick, setTick] = useState(0)
  const order = useMemo(() => getShopOrder(id), [id, tick])
  return { order, reload: () => setTick((value) => value + 1) }
}
