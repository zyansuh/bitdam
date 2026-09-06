import { useMemo, useState } from 'react'
import { listBreweriesByRegion, type MapRegionId } from '../data/breweries'
import { getBreweryDetail } from '../utils/getBreweryDetail'

export function useTourDesk() {
  const [regionId, setRegionId] = useState<MapRegionId>('gyeonggi')
  const [breweryId, setBreweryId] = useState('samhae')

  const list = useMemo(() => listBreweriesByRegion(regionId), [regionId])
  const selected = useMemo(() => getBreweryDetail(breweryId), [breweryId])

  function selectRegion(id: MapRegionId) {
    setRegionId(id)
    const next = listBreweriesByRegion(id)
    if (next.length && !next.some((item) => item.id === breweryId)) {
      setBreweryId(next[0].id)
    }
  }

  return { regionId, breweryId, list, selected, selectRegion, setBreweryId }
}
