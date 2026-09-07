import type { SellerShop } from '../types/lounge'

export const SELLER_SHOPS: SellerShop[] = [
  { id: 'hansan', name: '한산소곡주 제1공방', owner: '김설아', region: '충남 서천' },
  { id: 'andong', name: '안동소주 명인 공방', owner: '안동 공방', region: '경북 안동' },
]

export function getSellerShop(id: string | undefined): SellerShop | undefined {
  if (!id) return undefined
  return SELLER_SHOPS.find((shop) => shop.id === id)
}
