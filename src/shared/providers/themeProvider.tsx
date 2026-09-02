import { createContext, useMemo, useState, type ReactNode } from 'react'
import type { Theme } from '../types/theme'
import {
  applyDocumentTheme,
  readStoredTheme,
  resolveTheme,
  writeStoredTheme,
} from '../utils/themeStorage'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const next = resolveTheme(readStoredTheme())
    applyDocumentTheme(next)
    return next
  })

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (next) => {
        writeStoredTheme(next)
        applyDocumentTheme(next)
        setThemeState(next)
      },
      toggleTheme: () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        writeStoredTheme(next)
        applyDocumentTheme(next)
        setThemeState(next)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
