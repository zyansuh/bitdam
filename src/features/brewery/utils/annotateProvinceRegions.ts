import type { FeatureCollection } from 'geojson'
import { provinceToMapRegion } from './provinceToMapRegion'

export function annotateProvinceRegions(data: FeatureCollection): FeatureCollection {
  return {
    ...data,
    features: data.features.map((feature) => ({
      ...feature,
      properties: {
        ...feature.properties,
        bitdamRegion: provinceToMapRegion(String(feature.properties?.name_eng ?? '')),
      },
    })),
  }
}
