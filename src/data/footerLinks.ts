import type { FooterNavLink } from '../shared/types/footer'

export const footerLinks: Record<string, FooterNavLink[]> = {
  서비스: [
    { label: '양조장 투어', to: '/breweries' },
    { label: '브랜드 스토어', to: '/products' },
    { label: '클래스', to: '/classes' },
    { label: '이벤트' },
    { label: '커뮤니티' },
  ],
  고객지원: [
    { label: '자주 묻는 질문' },
    { label: '1:1 문의' },
    { label: '배송 안내', to: '/terms#shipping' },
    { label: '교환/반품', to: '/terms#shipping' },
  ],
  '법적 고지': [
    { label: '이용약관', to: '/terms' },
    { label: '개인정보처리방침', to: '/privacy' },
    { label: '사업자 정보', to: '/terms#business' },
  ],
}
