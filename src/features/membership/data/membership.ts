export type MembershipTierId = 'vip' | 'gold' | 'platinum'

export interface MembershipTier {
  id: MembershipTierId
  name: string
  minSpend: number
}

export interface PointHistoryItem {
  id: string
  title: string
  date: string
  points: number
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  { id: 'platinum', name: '플래티넘', minSpend: 500000 },
  { id: 'gold', name: '골드', minSpend: 200000 },
  { id: 'vip', name: 'VIP', minSpend: 100000 },
]

export const MEMBERSHIP_SPEND = 455000
export const MEMBERSHIP_POINTS = 4850
export const MEMBERSHIP_EXPIRING = 0

export const GOLD_BENEFITS = [
  '구매 금액의 2% 포인트 적립',
  '생일 쿠폰 연 1회 지급',
  '5만 원 이상 결제 시 무료배송',
  '한정판·양조장 투어 우선 안내',
]

export const POINT_HISTORY: PointHistoryItem[] = [
  { id: 'p1', title: '구매 적립 - 담은 생막걸리 1건', date: '2026.01.05', points: 1200 },
  { id: 'p2', title: '쿠폰 사용 - WELCOME', date: '2026.01.02', points: -1500 },
  { id: 'p3', title: '구매 적립 - 한산 소곡주', date: '2025.12.28', points: 840 },
  { id: 'p4', title: '리뷰 작성 적립', date: '2025.12.20', points: 200 },
  { id: 'p5', title: '구매 적립 - 안동소주 17도', date: '2025.12.11', points: 300 },
]
