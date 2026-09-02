import { createContext, useMemo, useState, type ReactNode } from 'react'
import type { AuthUser } from '../types/auth'
import { clearAuthUser, readAuthUser, writeAuthUser } from '../utils/authStorage'

interface AuthContextValue {
  user: AuthUser | null
  isLoggedIn: boolean
  login: (user: AuthUser) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(() => readAuthUser())

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoggedIn: user !== null,
      login: (nextUser) => {
        writeAuthUser(nextUser)
        setUser(nextUser)
      },
      logout: () => {
        clearAuthUser()
        setUser(null)
      },
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
