import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { canOpenAdminScope } from '../../../shared/utils/workspaceRole'
import { SELLER_SHOPS } from '../data/sellerShops'
import { useLoungeAccess } from '../hooks/useLoungeAccess'
import { readLoungeScope, writeLoungeScope } from '../utils/loungeScopeStorage'
import type { SellerShop } from '../types/lounge'
import type { WorkspaceRole } from '../../../shared/types/auth'

interface LoungeScopeValue {
  allowed: boolean
  role: WorkspaceRole
  isAdmin: boolean
  scopeId: string
  pickScope: (next: string) => void
  shops: SellerShop[]
  titleShop: SellerShop | undefined
}

const LoungeScopeContext = createContext<LoungeScopeValue | null>(null)

export function LoungeScopeProvider({ children }: { children: ReactNode }) {
  const { user, role, allowed } = useLoungeAccess()
  const isAdmin = canOpenAdminScope(role)
  const lockedSellerId = user?.sellerId ?? ''

  const [scopeId, setScopeId] = useState(() => {
    if (!isAdmin) return lockedSellerId
    return readLoungeScope() || 'all'
  })

  const value = useMemo<LoungeScopeValue>(() => {
    const activeId = isAdmin ? scopeId : lockedSellerId
    return {
      allowed,
      role,
      isAdmin,
      scopeId: activeId,
      pickScope: (next: string) => {
        setScopeId(next)
        writeLoungeScope(next)
      },
      shops: SELLER_SHOPS,
      titleShop:
        !isAdmin
          ? SELLER_SHOPS.find((shop) => shop.id === lockedSellerId)
          : activeId === 'all'
            ? undefined
            : SELLER_SHOPS.find((shop) => shop.id === activeId),
    }
  }, [allowed, isAdmin, lockedSellerId, role, scopeId])

  return <LoungeScopeContext.Provider value={value}>{children}</LoungeScopeContext.Provider>
}

export function useLoungeScope() {
  const context = useContext(LoungeScopeContext)
  if (!context) {
    throw new Error('useLoungeScope는 LoungeScopeProvider 안에서만 사용할 수 있습니다.')
  }
  return context
}
