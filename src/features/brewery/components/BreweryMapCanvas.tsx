import { useRef } from 'react'
import type { BreweryPin, MapRegionId } from '../data/breweries'
import { useBreweryMapLibre } from '../hooks/useBreweryMapLibre'

interface BreweryMapCanvasProps {
  selected: BreweryPin | null
  regionId: MapRegionId
  onSelect: (id: string) => void
  onSelectRegion: (id: MapRegionId) => void
}

export default function BreweryMapCanvas({
  selected,
  regionId,
  onSelect,
  onSelectRegion,
}: BreweryMapCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useBreweryMapLibre({
    containerRef,
    regionId,
    selected,
    onSelectPin: onSelect,
    onSelectRegion,
  })

  return (
    <section className="brewery-map-panel">
      <h2 className="brewery-section__title">지역별 양조장 분포도</h2>
      <div className="brewery-map">
        <div ref={containerRef} className="brewery-map__canvas" />
      </div>
      <p className="brewery-map__credit">시도 경계 · 통계청 2013 단순화 GeoJSON · 타일 CARTO / OSM</p>
    </section>
  )
}
