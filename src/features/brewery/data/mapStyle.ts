import type { StyleSpecification } from 'maplibre-gl'

export const KOREA_CENTER: [number, number] = [127.8, 36.15]
export const KOREA_ZOOM = 6.15
export const KOREA_BOUNDS: [[number, number], [number, number]] = [
  [124.4, 32.9],
  [132.1, 38.9],
]

export const BREWERY_MAP_STYLE: StyleSpecification = {
  version: 8,
  glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
  sources: {
    carto: {
      type: 'raster',
      tiles: [
        'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png',
        'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png',
      ],
      tileSize: 256,
      attribution: '© OpenStreetMap © CARTO',
    },
  },
  layers: [
    {
      id: 'carto',
      type: 'raster',
      source: 'carto',
    },
  ],
}
