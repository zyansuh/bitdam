import { useCallback, useState } from 'react'

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return {
    menuOpen,
    toggleMenu,
    closeMenu,
  }
}
