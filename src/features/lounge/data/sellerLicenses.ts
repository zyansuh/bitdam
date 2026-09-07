import { BREWERIES } from '../../brewery/data/breweries'
import type { SellerLicense } from '../types/lounge'

const OWNERS: Record<string, string> = {
  hansan: '김설아',
  andong: '박안동',
  samhae: '김포 삼해',
}

const DEMO_BIZ: Record<string, string> = {
  hansan: '314-81-67890',
  andong: '512-81-23456',
  samhae: '123-81-11111',
}

function serialBizNo(index: number): string {
  const tail = String(10000 + index * 173).slice(-5)
  return `${120 + index}-81-${tail}`
}

export const SELLER_LICENSES: SellerLicense[] = BREWERIES.map((brewery, index) => ({
  breweryId: brewery.id,
  bizNo: DEMO_BIZ[brewery.id] ?? serialBizNo(index),
  owner: OWNERS[brewery.id] ?? brewery.name.replace(/ 양조장|도가|촌$/, '').trim(),
}))

export const DEMO_HANSAN_BIZ_NO = DEMO_BIZ.hansan
export const DEMO_ANDONG_BIZ_NO = DEMO_BIZ.andong
