export type CustomStepId = 1 | 2 | 3 | 4

export interface CustomOption {
  id: string
  label: string
  extra: number
}

export interface CustomColorOption extends CustomOption {
  hex: string
}

export interface CustomQuoteLine {
  label: string
  amount: number
}

export interface CustomQuote {
  lines: CustomQuoteLine[]
  total: number
}

export interface CustomLabelDraft {
  step: CustomStepId
  occasionId: string
  templateId: string
  line1: string
  line2: string
  spiritId: string
  abvId: string
  borderId: string
  engraveName: string
  engraveMessage: string
  reserved: boolean
}
