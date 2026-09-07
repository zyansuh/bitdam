export const ORDER_STEPS = [
  { id: '결제 확인', no: '01', label: '결제완료' },
  { id: '출고 준비', no: '02', label: '상품 준비중' },
  { id: '배송 중', no: '03', label: '배송중' },
  { id: '배송 완료', no: '04', label: '배송완료' },
] as const

export function orderStepIndex(status: string): number {
  const index = ORDER_STEPS.findIndex((step) => step.id === status)
  return index < 0 ? 0 : index
}
