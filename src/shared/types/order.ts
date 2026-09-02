export interface LastOrder {
  orderNo: string
  recipient: string
  phone: string
  address: string
  payment: string
  payAmount: number
  couponTitle: string | null
  productId?: number
  quantity?: number
}
