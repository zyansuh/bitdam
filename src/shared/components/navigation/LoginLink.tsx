import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LoginLinkProps {
  className?: string
  children: ReactNode
  'aria-label'?: string
}

export default function LoginLink({ className, children, 'aria-label': ariaLabel }: LoginLinkProps) {
  const location = useLocation()
  const from = `${location.pathname}${location.search}`
  const to = from.startsWith('/login') ? '/login' : `/login?from=${encodeURIComponent(from)}`

  return (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
