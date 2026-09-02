import type { MapRegionId } from '../data/breweries'

const NAME_ENG_TO_REGION: Record<string, Exclude<MapRegionId, 'all'>> = {
  Seoul: 'gyeonggi',
  'Gyeonggi-do': 'gyeonggi',
  Incheon: 'gyeonggi',
  'Gangwon-do': 'gangwon',
  'Chungcheongbuk-do': 'chungbuk',
  'Chungcheongnam-do': 'chungnam',
  Daejeon: 'chungnam',
  Sejongsi: 'chungnam',
  'Jeollabuk-do': 'jeonbuk',
  'Jeollanam-do': 'jeonnam',
  Gwangju: 'jeonnam',
  'Gyeongsangbuk-do': 'gyeongbuk',
  Daegu: 'gyeongbuk',
  'Gyeongsangnam-do': 'gyeongnam',
  Busan: 'gyeongnam',
  Ulsan: 'gyeongnam',
  'Jeju-do': 'jeju',
}

export function provinceToMapRegion(nameEng: string): Exclude<MapRegionId, 'all'> | null {
  return NAME_ENG_TO_REGION[nameEng] ?? null
}
