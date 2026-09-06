import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import type { SavedPayment } from '../types/accountLists'
import { readUserList, writeUserList } from '../utils/userListStorage'

const KIND = 'payments'

const seed: SavedPayment[] = [
  { id: 'card-1', brand: '신한', last4: '4242', holder: '김상현' },
]

export function useSavedPayments() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [items, setItems] = useState<SavedPayment[]>(() => {
    if (!userId) return []
    const stored = readUserList<SavedPayment>(KIND, userId)
    return stored.length > 0 ? stored : seed
  })
  const [draft, setDraft] = useState({ brand: '', last4: '', holder: '' })

  function persist(next: SavedPayment[]) {
    setItems(next)
    if (userId) writeUserList(KIND, userId, next)
  }

  function addPayment() {
    if (!draft.brand.trim() || draft.last4.replace(/\D/g, '').length < 4) return
    persist([
      ...items,
      {
        id: crypto.randomUUID(),
        brand: draft.brand.trim(),
        last4: draft.last4.replace(/\D/g, '').slice(-4),
        holder: draft.holder.trim() || user?.nickname || '',
      },
    ])
    setDraft({ brand: '', last4: '', holder: '' })
  }

  function removePayment(id: string) {
    persist(items.filter((item) => item.id !== id))
  }

  return { list: items, draft, setDraft, addPayment, removePayment }
}
