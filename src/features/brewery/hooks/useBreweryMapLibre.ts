import { useEffect, useRef, type RefObject } from 'react'
import {
  LngLatBounds,
  Map as MapLibreMap,
  NavigationControl,
  Popup,
  type MapMouseEvent,
} from 'maplibre-gl'
import type { FeatureCollection, Geometry } from 'geojson'
import { BREWERIES, type BreweryPin, type MapRegionId } from '../data/breweries'
import { BREWERY_MAP_STYLE, KOREA_BOUNDS, KOREA_CENTER, KOREA_ZOOM } from '../data/mapStyle'
import { annotateProvinceRegions } from '../utils/annotateProvinceRegions'
import { escapeHtml } from '../utils/escapeHtml'

interface UseBreweryMapLibreOptions {
  containerRef: RefObject<HTMLDivElement | null>
  regionId: MapRegionId
  selected: BreweryPin | null
  onSelectPin: (id: string) => void
  onSelectRegion: (id: MapRegionId) => void
}

function tokenColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return value || fallback
}

function breweryCollection(): FeatureCollection {
  return {
    type: 'FeatureCollection',
    features: BREWERIES.map((item) => ({
      type: 'Feature',
      properties: { id: item.id, regionId: item.regionId, name: item.name },
      geometry: { type: 'Point', coordinates: [item.lng, item.lat] },
    })),
  }
}

function extendGeometry(bounds: LngLatBounds, geometry: Geometry) {
  if (geometry.type === 'Polygon') {
    for (const ring of geometry.coordinates) {
      for (const point of ring) {
        bounds.extend(point as [number, number])
      }
    }
  }
  if (geometry.type === 'MultiPolygon') {
    for (const polygon of geometry.coordinates) {
      for (const ring of polygon) {
        for (const point of ring) {
          bounds.extend(point as [number, number])
        }
      }
    }
  }
}

function boundsForRegion(provinces: FeatureCollection, regionId: MapRegionId) {
  if (regionId === 'all') {
    return KOREA_BOUNDS
  }
  const bounds = new LngLatBounds()
  for (const feature of provinces.features) {
    if (feature.properties?.bitdamRegion !== regionId || !feature.geometry) {
      continue
    }
    extendGeometry(bounds, feature.geometry)
  }
  return bounds.isEmpty() ? KOREA_BOUNDS : bounds
}

function applyRegionPaint(map: MapLibreMap, regionId: MapRegionId) {
  if (!map.getLayer('provinces-fill')) {
    return
  }
  const gold = tokenColor('--color-gold', '#c5994c')
  const muted = tokenColor('--color-cream-dark', '#f0ebe4')
  map.setPaintProperty('provinces-fill', 'fill-color', [
    'case',
    ['==', ['get', 'bitdamRegion'], regionId],
    gold,
    muted,
  ])
  map.setPaintProperty('provinces-fill', 'fill-opacity', [
    'case',
    ['==', ['literal', regionId], 'all'],
    0.18,
    ['==', ['get', 'bitdamRegion'], regionId],
    0.38,
    0.08,
  ])
  map.setFilter('brewery-dots', regionId === 'all' ? null : ['==', ['get', 'regionId'], regionId])
}

export function useBreweryMapLibre({
  containerRef,
  regionId,
  selected,
  onSelectPin,
  onSelectRegion,
}: UseBreweryMapLibreOptions) {
  const mapRef = useRef<MapLibreMap | null>(null)
  const popupRef = useRef<Popup | null>(null)
  const provincesRef = useRef<FeatureCollection | null>(null)
  const regionIdRef = useRef(regionId)
  const onSelectPinRef = useRef(onSelectPin)
  const onSelectRegionRef = useRef(onSelectRegion)
  regionIdRef.current = regionId
  onSelectPinRef.current = onSelectPin
  onSelectRegionRef.current = onSelectRegion

  useEffect(() => {
    const container = containerRef.current
    if (!container || mapRef.current) {
      return
    }

    const gold = tokenColor('--color-gold', '#c5994c')
    const creamDark = tokenColor('--color-cream-dark', '#f0ebe4')

    const map = new MapLibreMap({
      container,
      style: BREWERY_MAP_STYLE,
      center: KOREA_CENTER,
      zoom: KOREA_ZOOM,
      minZoom: 5.4,
      maxZoom: 12,
    })
    map.addControl(new NavigationControl({ showCompass: false }), 'top-right')
    mapRef.current = map
    popupRef.current = new Popup({
      closeButton: false,
      offset: 16,
      className: 'brewery-map__popup',
    })

    map.on('load', async () => {
      const response = await fetch('/geo/korea-provinces.geojson')
      const raw = (await response.json()) as FeatureCollection
      const provinces = annotateProvinceRegions(raw)
      provincesRef.current = provinces

      map.addSource('provinces', { type: 'geojson', data: provinces })
      map.addLayer({
        id: 'provinces-fill',
        type: 'fill',
        source: 'provinces',
        paint: { 'fill-color': gold, 'fill-opacity': 0.16 },
      })
      map.addLayer({
        id: 'provinces-line',
        type: 'line',
        source: 'provinces',
        paint: { 'line-color': creamDark, 'line-width': 1.1 },
      })
      map.addSource('breweries', { type: 'geojson', data: breweryCollection() })
      map.addLayer({
        id: 'brewery-dots',
        type: 'circle',
        source: 'breweries',
        paint: {
          'circle-radius': 7,
          'circle-color': gold,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      })

      map.on('click', (event: MapMouseEvent) => {
        const breweryHit = map.queryRenderedFeatures(event.point, { layers: ['brewery-dots'] })
        const breweryId = breweryHit[0]?.properties?.id
        if (typeof breweryId === 'string') {
          onSelectPinRef.current(breweryId)
          return
        }
        const provinceHit = map.queryRenderedFeatures(event.point, { layers: ['provinces-fill'] })
        const region = provinceHit[0]?.properties?.bitdamRegion as MapRegionId | undefined
        if (region) {
          onSelectRegionRef.current(region)
        }
      })
      map.on('mouseenter', 'brewery-dots', () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'brewery-dots', () => {
        map.getCanvas().style.cursor = ''
      })
      map.on('mouseenter', 'provinces-fill', () => {
        map.getCanvas().style.cursor = 'pointer'
      })
      map.on('mouseleave', 'provinces-fill', () => {
        map.getCanvas().style.cursor = ''
      })

      applyRegionPaint(map, regionIdRef.current)
      map.fitBounds(boundsForRegion(provinces, regionIdRef.current), { padding: 36, duration: 0 })
      map.resize()
    })

    const observer = new ResizeObserver(() => map.resize())
    observer.observe(container)

    return () => {
      observer.disconnect()
      popupRef.current?.remove()
      map.remove()
      mapRef.current = null
    }
  }, [containerRef])

  useEffect(() => {
    const map = mapRef.current
    const provinces = provincesRef.current
    if (!map?.getLayer('provinces-fill') || !provinces) {
      return
    }
    applyRegionPaint(map, regionId)
    map.fitBounds(boundsForRegion(provinces, regionId), { padding: 36, duration: 700 })
  }, [regionId])

  useEffect(() => {
    const map = mapRef.current
    const popup = popupRef.current
    if (!map?.getLayer('brewery-dots') || !popup) {
      return
    }
    const gold = tokenColor('--color-gold', '#c5994c')
    const navy = tokenColor('--color-navy', '#1a2332')
    map.setPaintProperty('brewery-dots', 'circle-color', [
      'case',
      ['==', ['get', 'id'], selected?.id ?? ''],
      navy,
      gold,
    ])
    map.setPaintProperty('brewery-dots', 'circle-radius', [
      'case',
      ['==', ['get', 'id'], selected?.id ?? ''],
      9,
      7,
    ])
    if (!selected) {
      popup.remove()
      return
    }
    popup
      .setLngLat([selected.lng, selected.lat])
      .setHTML(
        `<strong>${escapeHtml(selected.name)}</strong><p>${escapeHtml(selected.address)}</p><p>${escapeHtml(selected.summary)}</p><a href="/breweries/${escapeHtml(selected.id)}">양조장 이야기</a>`,
      )
      .addTo(map)
  }, [selected])
}
