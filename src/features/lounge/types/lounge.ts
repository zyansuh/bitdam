export interface SellerShop {
  id: string
  name: string
  owner: string
  region: string
}

export interface LoungeNavItem {
  label: string
  to: string
}

export interface LoungeKpi {
  id: string
  label: string
  value: string
  note: string
  warn?: boolean
}

export interface LoungeMonthBar {
  month: string
  amount: number
}

export interface LoungeSplitSlice {
  id: string
  label: string
  percent: number
}

export interface LoungeOrder {
  id: string
  sellerId: string
  time: string
  product: string
  buyer: string
  amount: number
  status: '신규 주문' | '결제 확인' | '출고 준비' | '배송 중'
}

export interface LoungeSettlement {
  id: string
  sellerId: string
  date: string
  orderId: string
  product: string
  paid: number
  fee: number
  due: number
  status: '정산완료' | '정산대기'
}

export interface LoungeProductRow {
  id: string
  sellerId: string
  name: string
  category: string
  stock: number
  price: number
  image: string
}

export interface LoungeCustomer {
  id: string
  sellerId: string
  name: string
  orders: number
  spend: number
}

export interface LoungeSubscribeRow {
  id: string
  sellerId: string
  plan: string
  member: string
  nextShip: string
  status: '진행' | '휴면'
}

export interface ProductDraft {
  step: 1 | 2 | 3 | 4
  name: string
  category: string
  subcategory: string
  image: string
  extras: string[]
  blurb: string
  story: string
  price: string
  stock: string
  shipMemo: string
  saved: boolean
}
