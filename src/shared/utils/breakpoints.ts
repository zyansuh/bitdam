export const BREAKPOINTS = {
  mobile: 600,
  tablet: 1000,
} as const

export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export function getBreakpoint(width: number): Breakpoint {
  if (width < BREAKPOINTS.mobile) return 'mobile'
  if (width < BREAKPOINTS.tablet) return 'tablet'
  return 'desktop'
}
