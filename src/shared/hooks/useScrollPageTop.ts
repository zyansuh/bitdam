import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollPageTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])
}
