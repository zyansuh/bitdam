import { MAP_REGIONS, type MapRegionId } from '../data/breweries'

interface BreweryRegionTabsProps {
  regionId: MapRegionId
  onSelect: (id: MapRegionId) => void
}

export default function BreweryRegionTabs({ regionId, onSelect }: BreweryRegionTabsProps) {
  return (
    <div className="brewery-tabs" role="tablist" aria-label="권역">
      {MAP_REGIONS.map((region) => (
        <button
          key={region.id}
          type="button"
          role="tab"
          aria-selected={regionId === region.id}
          className={regionId === region.id ? 'brewery-tabs__item brewery-tabs__item--on' : 'brewery-tabs__item'}
          onClick={() => onSelect(region.id)}
        >
          {region.label}
        </button>
      ))}
    </div>
  )
}
