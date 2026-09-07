import type { FooterNavLink } from '../shared/types/footer'

export const footerLinks: Record<string, FooterNavLink[]> = {
  서비스: [
    { label: '양조장 투어', to: '/breweries' },
    { label: '투어 예약', to: '/tours' },
    { label: '브랜드 스토어', to: '/products' },
    { label: '클래스', to: '/classes' },
    { label: '기념주 제작', to: '/custom' },
    { label: '선물하기', to: '/gift' },
    { label: '추석 특별관', to: '/holiday/gifts' },
    { label: '추석 응모', to: '/events/chuseok' },
    { label: '설날 복주머니', to: '/events/daily' },
    { label: '타임 특가', to: '/deals' },
    { label: '정기 구독', to: '/subscribe' },
    { label: '단체 · 기업 선물', to: '/corporate' },
    { label: '커뮤니티', to: '/community' },
  ],
  고객지원: [
    { label: '공지사항', to: '/notices' },
    { label: 'AI 추천', to: '/chat' },
    { label: '자주 묻는 질문', to: '/help' },
    { label: '알림 센터', to: '/notifications' },
    { label: '1:1 문의', to: '/mypage/support' },
    { label: '배송 안내', to: '/terms#shipping' },
    { label: '교환/반품', to: '/terms#shipping' },
  ],
  '법적 고지': [
    { label: '이용약관', to: '/terms' },
    { label: '개인정보처리방침', to: '/privacy' },
    { label: '사업자 정보', to: '/terms#business' },
  ],
}
