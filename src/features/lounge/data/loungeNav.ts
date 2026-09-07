import type { LoungeNavItem } from '../types/lounge'

export const loungeNav: LoungeNavItem[] = [
  { label: '대시보드', to: '/mypage/lounge' },
  { label: '상품관리', to: '/mypage/lounge/products' },
  { label: '주문관리', to: '/mypage/lounge/orders' },
  { label: '정산관리', to: '/mypage/lounge/settlements' },
  { label: '매출리포트', to: '/mypage/lounge/reports' },
  { label: '고객관리', to: '/mypage/lounge/customers' },
  { label: '구독관리', to: '/mypage/lounge/subscriptions' },
  { label: '업무 보고', to: '/mypage/staff/work-reports' },
]
