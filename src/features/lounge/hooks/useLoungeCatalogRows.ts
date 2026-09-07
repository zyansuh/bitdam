import { useMemo, useState } from 'react'
import { listCatalogInventory } from '../../../data/products'
import { isCatalogPaused, toggleCatalogPaused } from '../../../shared/utils/catalogPauseStorage'
import { useLoungeScope } from '../providers/loungeScopeProvider'
import { LOUNGE_PRODUCTS } from '../data/loungeRecords'
import { inSellerScope } from '../utils/inSellerScope'
import { sellerIdsForScope } from '../utils/loungeSnapshot'
import type { LoungeProductRow } from '../types/lounge'

export function useLoungeCatalogRows() {
  const { scopeId } = useLoungeScope()
  const [version, setVersion] = useState(0)
  const ids = sellerIdsForScope(scopeId)

  const rows = useMemo(() => {
    const catalog: LoungeProductRow[] = listCatalogInventory()
      .filter((product) => ids.includes(product.sellerId))
      .map((product) => ({
        id: `c-${product.id}`,
        sellerId: product.sellerId,
        name: product.name,
        category: product.category,
        stock: product.stock ?? 0,
        price: product.price,
        image: product.image,
        href: `/products/${product.id}`,
        catalogId: product.id,
        paused: isCatalogPaused(product.id),
      }))
    const mocks = inSellerScope(LOUNGE_PRODUCTS, ids).filter(
      (row) => !catalog.some((item) => item.name === row.name),
    )
    return [...catalog, ...mocks]
  }, [ids, version])

  function togglePause(catalogId: number) {
    toggleCatalogPaused(catalogId)
    setVersion((current) => current + 1)
  }

  return { rows, togglePause }
}
