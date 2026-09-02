import { useState } from 'react'
import { useResponsiveBreakpoint } from './useResponsiveBreakpoint'

export function useFilterPanel() {
  const breakpoint = useResponsiveBreakpoint()
  const [filtersOpen, setFiltersOpen] = useState(false)

  return {
    breakpoint,
    filtersOpen,
    showSidebar: breakpoint === 'desktop' || filtersOpen,
    toggleFilters: () => setFiltersOpen((prev) => !prev),
  }
}
