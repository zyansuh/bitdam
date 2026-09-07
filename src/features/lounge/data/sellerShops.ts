import { BREWERIES } from '../../brewery/data/breweries'
import type { SellerShop } from '../types/lounge'
import { SELLER_LICENSES } from './sellerLicenses'

export const SELLER_SHOPS: SellerShop[] = BREWERIES.map((brewery) => {
  const license = SELLER_LICENSES.find((row) => row.breweryId === brewery.id)
  return {
    id: brewery.id,
    name: brewery.name,
    owner: license?.owner ?? brewery.name,
    region: brewery.region,
    address: brewery.address,
    image: brewery.image,
    bizNo: license?.bizNo ?? '',
  }
})

export function getSellerShop(id: string | undefined): SellerShop | undefined {
  if (!id) return undefined
  return SELLER_SHOPS.find((shop) => shop.id === id)
}
