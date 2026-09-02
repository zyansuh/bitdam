import type { Theme } from '../types/theme'

export const THEME_STORAGE_KEY = 'bitdam.theme'
export const THEME_COOKIE_KEY = 'bitdam.theme'

export function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function readThemeFromOauthState(state: string | null): Theme | null {
  if (!state) {
    return null
  }

  const token = state.split('.').pop() ?? ''
  return isTheme(token) ? token : null
}

export function readThemeCookie(): Theme | null {
  try {
    const match = document.cookie.match(/(?:^|; )bitdam\.theme=(dark|light)/)
    return match && isTheme(match[1]) ? match[1] : null
  } catch {
    return null
  }
}

export function writeThemeCookie(theme: Theme): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${THEME_COOKIE_KEY}=${theme}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
}

export function readStoredTheme(): Theme | null {
  const fromOauth = readThemeFromOauthState(new URLSearchParams(window.location.search).get('state'))
  if (fromOauth) {
    return fromOauth
  }

  const fromCookie = readThemeCookie()
  if (fromCookie) {
    return fromCookie
  }

  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(raw) ? raw : null
  } catch {
    return null
  }
}

export function writeStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Private mode may block localStorage after an OAuth bounce.
  }

  writeThemeCookie(theme)
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
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function syncDocumentTheme(theme: Theme): void {
  writeStoredTheme(theme)
  applyDocumentTheme(theme)
}
