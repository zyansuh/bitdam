export type GiftStepId = 1 | 2 | 3

export interface GiftSkin {
  id: string
  label: string
  image: string
  hint: string
}

export interface GiftWrap {
  id: string
  label: string
  extra: number
  image: string
  detail: string
}

export interface GiftDraft {
  step: GiftStepId
  productId: number | null
  qty: number
  skinId: string
  message: string
  wrapId: string
  paid: boolean
}
