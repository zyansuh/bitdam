import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SignupLinkProps {
  className?: string
  children: ReactNode
  'aria-label'?: string
  onClick?: () => void
}

export default function SignupLink({
  className,
  children,
  'aria-label': ariaLabel,
  onClick,
}: SignupLinkProps) {
  const location = useLocation()
  const from = `${location.pathname}${location.search}`
  const onAuth = from.startsWith('/login') || from.startsWith('/signup')
  const to = onAuth ? '/signup' : `/signup?from=${encodeURIComponent(from)}`

  return (
    <Link to={to} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
