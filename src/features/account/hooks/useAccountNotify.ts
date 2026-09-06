import { useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { readUserList, writeUserList } from '../utils/userListStorage'

interface NotifyPrefs {
  order: boolean
  marketing: boolean
  tour: boolean
}

const defaults: NotifyPrefs = { order: true, marketing: false, tour: true }

export function useAccountNotify() {
  const { user } = useAuth()
  const userId = user?.id ?? ''
  const [prefs, setPrefs] = useState<NotifyPrefs>(() => {
    if (!userId) return defaults
    const stored = readUserList<NotifyPrefs>('notify', userId)[0]
    return stored ?? defaults
  })
  const [saved, setSaved] = useState(false)

  function toggle(key: keyof NotifyPrefs) {
    setPrefs((current) => ({ ...current, [key]: !current[key] }))
    setSaved(false)
  }

  function save() {
    if (userId) writeUserList('notify', userId, [prefs])
    setSaved(true)
  }

  return { prefs, toggle, save, saved }
}
