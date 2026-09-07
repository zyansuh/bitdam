import type { LoungeSettlement } from '../types/lounge'

export function downloadSettlementCsv(rows: LoungeSettlement[]): void {
  const header = '정산일자,주문번호,상품명,결제금액,수수료,정산예정액,상태'
  const body = rows
    .map((row) => [row.date, row.orderId, row.product, row.paid, row.fee, row.due, row.status].join(','))
    .join('\n')
  const blob = new Blob([`${header}\n${body}`], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'bitdam-settlements.csv'
  link.click()
  URL.revokeObjectURL(url)
}
