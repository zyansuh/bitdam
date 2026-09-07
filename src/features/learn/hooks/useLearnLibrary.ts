import { useState } from 'react'
import { markLearnRead, readLearnLibrary, toggleLearnSaved } from '../utils/learnSaveStorage'

export function useLearnLibrary(slug?: string) {
  const [library, setLibrary] = useState(() => readLearnLibrary())
  const saved = slug ? library.saved.includes(slug) : false
  const read = slug ? library.read.includes(slug) : false

  function toggleSave() {
    if (!slug) return
    setLibrary(toggleLearnSaved(slug))
  }

  function markRead() {
    if (!slug) return
    setLibrary(markLearnRead(slug))
  }

  return { library, saved, read, toggleSave, markRead }
}
