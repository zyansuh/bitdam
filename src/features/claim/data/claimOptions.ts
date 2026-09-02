export const CLAIM_REASONS = [
  '배송 중 상품 파손/오배송',
  '상품 불량 (누수·변질 등)',
  '주문과 다른 상품 수령',
  '단순 변심 (미개봉)',
] as const

export const CLAIM_STEPS = [
  { no: '1', label: '신청 접수' },
  { no: '2', label: '수거 진행' },
  { no: '3', label: '검수 완료' },
  { no: '4', label: '환불/교환 완료' },
] as const

export const CLAIM_PICKUP_FALLBACK = {
  recipient: '김찰라',
  phone: '010-4235-5123',
  address: '서울특별시 강남구 테헤란로 422 9층',
}
