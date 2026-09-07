export interface SubscribePlan {
  id: string
  name: string
  price: number
  popular?: boolean
  perks: string[]
}

export interface SubscribeBox {
  id: string
  month: string
  title: string
  image: string
}

export interface SubscribeFaq {
  q: string
  a: string
}
