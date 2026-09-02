import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LoginLinkProps {
  className?: string
  children: ReactNode
  'aria-label'?: string
  onClick?: () => void
}

export default function LoginLink({
  className,
  children,
  'aria-label': ariaLabel,
  onClick,
}: LoginLinkProps) {
  const location = useLocation()
  const from = `${location.pathname}${location.search}`
  const onAuth = from.startsWith('/login') || from.startsWith('/signup')
  const to = onAuth ? '/login' : `/login?from=${encodeURIComponent(from)}`

  return (
    <Link to={to} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
