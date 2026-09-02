import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])
}
