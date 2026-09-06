import { useMemo, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import type { SavedAddress } from '../types/accountLists'
import { readUserList, writeUserList } from '../utils/userListStorage'

const KIND = 'addresses'

const seed: SavedAddress[] = [
  {
    id: 'home',
    label: '집',
    name: '김상현',
    phone: '010-1234-5678',
    line: '서울특별시 종로구 자하문로 9',
    isDefault: true,
  },
]

export function useSavedAddresses() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [items, setItems] = useState<SavedAddress[]>(() => {
    if (!userId) return []
    const stored = readUserList<SavedAddress>(KIND, userId)
    return stored.length > 0 ? stored : seed
  })

  const [draft, setDraft] = useState({ label: '', name: '', phone: '', line: '' })

  const list = useMemo(() => items, [items])

  function persist(next: SavedAddress[]) {
    setItems(next)
    if (userId) writeUserList(KIND, userId, next)
  }

  function addAddress() {
    if (!draft.label.trim() || !draft.line.trim()) return
    persist([
      ...items,
      {
        id: crypto.randomUUID(),
        label: draft.label.trim(),
        name: draft.name.trim() || user?.nickname || '',
        phone: draft.phone.trim(),
        line: draft.line.trim(),
        isDefault: items.length === 0,
      },
    ])
    setDraft({ label: '', name: '', phone: '', line: '' })
  }

  function removeAddress(id: string) {
    persist(items.filter((item) => item.id !== id))
  }

  function setDefault(id: string) {
    persist(items.map((item) => ({ ...item, isDefault: item.id === id })))
  }

  return { list, draft, setDraft, addAddress, removeAddress, setDefault }
}
