export interface IrKpi {
  id: string
  label: string
  value: string
  note: string
  tone: 'gold' | 'navy' | 'green'
}

export interface IrMixRow {
  id: string
  label: string
  percent: number
  amount: number
}

export interface IrMarket {
  tam: number
  sam: number
  som: number
}

export interface IrSnapshot {
  mau: number
  gmv: number
  nps: number
  retentionMonths: number
  churnDrop: number
  sku: number
  breweryN: number
  classN: number
  limitedStock: number
  mix: IrMixRow[]
  market: IrMarket
  kpis: IrKpi[]
  sources: string[]
}
