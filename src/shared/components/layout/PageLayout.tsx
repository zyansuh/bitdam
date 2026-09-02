import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-dvh w-full overflow-x-hidden bg-cream ${className}`}>
      {children}
    </div>
  )
}
