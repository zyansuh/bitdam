import type { AccountNavItem } from '../types/accountNav'

export const mypageNav: AccountNavItem[] = [
  { label: '주문 내역', to: '/mypage' },
  { label: '전통주 인증서 (NFT)', to: '/mypage/certificates' },
  { label: '쿠폰 및 혜택', to: '/mypage/coupons' },
  { label: '배송지 관리', to: '/mypage/addresses' },
  { label: '결제수단 관리', to: '/mypage/payments' },
  { label: '1:1 고객센터', to: '/mypage/support' },
  { label: '개인정보 설정', to: '/account' },
]
