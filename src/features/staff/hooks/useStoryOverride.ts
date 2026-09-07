import { useState } from 'react'
import { readStoryOverride, writeStoryOverride } from '../utils/storyOverrideStorage'

export function useStoryOverride() {
  const [draft, setDraft] = useState(() => readStoryOverride())
  const [saved, setSaved] = useState(false)

  function save() {
    writeStoryOverride(draft)
    setSaved(true)
  }

  return { draft, setDraft, saved, save }
}
