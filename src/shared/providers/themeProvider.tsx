import { createContext, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import type { Theme } from '../types/theme'
import { readStoredTheme, resolveTheme, syncDocumentTheme } from '../utils/themeStorage'

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
  const [theme, setThemeState] = useState<Theme>(() => resolveTheme(readStoredTheme()))

  useLayoutEffect(() => {
    syncDocumentTheme(theme)

    const onPageShow = () => {
      syncDocumentTheme(theme)
    }

    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: (next) => {
        syncDocumentTheme(next)
        setThemeState(next)
      },
      toggleTheme: () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        syncDocumentTheme(next)
        setThemeState(next)
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
