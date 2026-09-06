export type GiftStepId = 1 | 2 | 3

export interface GiftSkin {
  id: string
  label: string
}

export interface GiftWrap {
  id: string
  label: string
  extra: number
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
