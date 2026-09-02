import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProductById, type Product } from '../../../data/products'
import { buildComparePath, parseCompareIds } from '../utils/compareQuery'

export function useCompareProducts() {
  const [searchParams] = useSearchParams()
  const ids = useMemo(() => parseCompareIds(searchParams.get('ids')), [searchParams])
  const products = useMemo(
    () =>
      ids
        .map((id) => getProductById(id))
        .filter((product): product is Product => product !== undefined),
    [ids],
  )

  function pathWithout(id: number): string {
    return buildComparePath(ids.filter((item) => item !== id))
  }

  return { ids, products, pathWithout }
}
