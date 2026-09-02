import type { FilterSection } from '../types/catalog'
import AbvFilter from './filters/AbvFilter'
import PriceRangeFilter from './filters/PriceRangeFilter'
import RegionFilter from './filters/RegionFilter'
import TasteTagFilter from './filters/TasteTagFilter'

interface FilterSidebarProps {
  sections: FilterSection[]
  regions: string[]
  onToggleRegion: (region: string) => void
  priceMin: number
  priceMax: number
  onPriceChange: (min: number, max: number) => void
  tasteTags: string[]
  onToggleTasteTag: (tag: string) => void
  abvRangeId: string | null
  onAbvChange: (id: string | null) => void
}

export default function FilterSidebar({
  sections,
  regions,
  onToggleRegion,
  priceMin,
  priceMax,
  onPriceChange,
  tasteTags,
  onToggleTasteTag,
  abvRangeId,
  onAbvChange,
}: FilterSidebarProps) {
  return (
    <aside className="filter-sidebar">
      <h2 className="filter-sidebar__title">상세 필터</h2>
      <div className="filter-sidebar__stack">
        {sections.includes('region') && (
          <RegionFilter selected={regions} onToggle={onToggleRegion} />
        )}
        {sections.includes('price') && (
          <PriceRangeFilter min={priceMin} max={priceMax} onChange={onPriceChange} />
        )}
        {sections.includes('taste') && (
          <TasteTagFilter selected={tasteTags} onToggle={onToggleTasteTag} />
        )}
        {sections.includes('abv') && (
          <AbvFilter selected={abvRangeId} onSelect={onAbvChange} />
        )}
      </div>
    </aside>
  )
}
