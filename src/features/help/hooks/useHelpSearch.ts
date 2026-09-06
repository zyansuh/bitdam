import { useState } from 'react'

export function useHelpSearch(initial = '') {
  const [query, setQuery] = useState(initial)
  return { query, setQuery }
}
