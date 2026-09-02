import { useState } from 'react'

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return {
    menuOpen,
    toggleMenu: () => setMenuOpen((prev) => !prev),
    closeMenu: () => setMenuOpen(false),
  }
}
