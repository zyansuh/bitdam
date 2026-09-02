import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SignupLinkProps {
  className?: string
  children: ReactNode
  'aria-label'?: string
}

export default function SignupLink({ className, children, 'aria-label': ariaLabel }: SignupLinkProps) {
  const location = useLocation()
  const from = `${location.pathname}${location.search}`
  const onAuth = from.startsWith('/login') || from.startsWith('/signup')
  const to = onAuth ? '/signup' : `/signup?from=${encodeURIComponent(from)}`

  return (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
