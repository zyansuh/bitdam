import type { Theme } from '../types/theme'

export const THEME_STORAGE_KEY = 'bitdam.theme'

export function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function readStoredTheme(): Theme | null {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(raw) ? raw : null
  } catch {
    return null
  }
}

export function writeStoredTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function prefersDarkScheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function resolveTheme(stored: Theme | null): Theme {
  if (stored) {
    return stored
  }

  return prefersDarkScheme() ? 'dark' : 'light'
}

export function applyDocumentTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function syncDocumentTheme(theme: Theme): void {
  writeStoredTheme(theme)
  applyDocumentTheme(theme)
}
