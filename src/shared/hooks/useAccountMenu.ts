import { useEffect, useRef } from 'react'
import { useFocusTrap } from './useFocusTrap'
import { useMobileMenu } from './useMobileMenu'

export function useAccountMenu() {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()
  const rootRef = useRef<HTMLDivElement>(null)
  useFocusTrap(menuOpen, rootRef)

  useEffect(() => {
    if (!menuOpen) return

    function onPointerDown(event: PointerEvent) {
      const root = rootRef.current
      if (root && !root.contains(event.target as Node)) {
        closeMenu()
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, closeMenu])

  return { menuOpen, toggleMenu, closeMenu, rootRef }
}
