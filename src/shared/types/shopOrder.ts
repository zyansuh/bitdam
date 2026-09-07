export type ShopOrderStatus = '결제 확인' | '출고 준비' | '배송 중' | '배송 완료'

export interface ShopOrderLine {
  productId: number
  name: string
  quantity: number
  price: number
  sellerId: string
}

export interface ShopOrder {
  id: string
  createdAt: string
  buyerId: string
  buyerName: string
  address: string
  phone: string
  payment: string
  amount: number
  discount?: number
  couponCode?: string
  couponTitle?: string
  status: ShopOrderStatus
  lines: ShopOrderLine[]
}
