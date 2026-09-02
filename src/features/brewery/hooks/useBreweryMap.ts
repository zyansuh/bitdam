import { useMemo, useState } from 'react'
import { BREWERIES, type MapRegionId } from '../data/breweries'

export function useBreweryMap(initial: MapRegionId = 'chungnam') {
  const [regionId, setRegionId] = useState<MapRegionId>(initial)
  const [selectedId, setSelectedId] = useState(BREWERIES.find((item) => item.regionId === initial)?.id ?? BREWERIES[0].id)

  const list = useMemo(() => {
    if (regionId === 'all') {
      return BREWERIES
    }
    return BREWERIES.filter((item) => item.regionId === regionId)
  }, [regionId])

  const selected = BREWERIES.find((item) => item.id === selectedId) ?? list[0] ?? null

  function selectRegion(next: MapRegionId) {
    setRegionId(next)
    const first = next === 'all' ? BREWERIES[0] : BREWERIES.find((item) => item.regionId === next)
    if (first) {
      setSelectedId(first.id)
    }
  }

  return {
    regionId,
    selectRegion,
    selectedId,
    setSelectedId,
    list,
    selected,
  }
}
