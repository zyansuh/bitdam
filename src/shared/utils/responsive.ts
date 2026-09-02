import { BREAKPOINTS, type Breakpoint } from './breakpoints'

export const Responsive = {
  isMobile(width: number) {
    return width < BREAKPOINTS.mobile
  },
  isTablet(width: number) {
    return width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet
  },
  isDesktop(width: number) {
    return width >= BREAKPOINTS.tablet
  },
  value<T>(width: number, values: { mobile: T; tablet?: T; desktop: T }): T {
    if (width < BREAKPOINTS.mobile) return values.mobile
    if (width < BREAKPOINTS.tablet) return values.tablet ?? values.mobile
    return values.desktop
  },
  columns(width: number): 1 | 2 | 3 | 4 {
    return Responsive.value(width, { mobile: 2, tablet: 3, desktop: 4 })
  },
}

export type { Breakpoint }
