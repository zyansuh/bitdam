export interface IrPerson {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface IrAdvisor {
  id: string
  name: string
  role: string
  bio: string
  initials: string
}

export const IR_ROUND = {
  badge: 'INVESTMENT ROUND : PRE-A',
  title: '시리즈 프리 A 투자 유치 요강',
  lead: '한랭 물류와 명인 콜라보를 키우기 위해 프리 A 라운드를 엽니다. 숫자는 빚담 카탈로그·양조장·클래스·구독·한정판 데이터에서 집계했습니다.',
  target: '₩15억',
  preValue: '₩60억',
  close: '2027 Q2',
}

export const IR_LEADERS: IrPerson[] = [
  {
    id: 'ceo',
    name: '김서연',
    role: 'CEO',
    bio: '전 카카오 전략리드 · 서울대 MBA. 전통주를 생활 구독으로 옮깁니다.',
    image: '/images/people/ceo.svg',
  },
  {
    id: 'cpo',
    name: '박준호',
    role: 'CPO',
    bio: '커머스 프로덕트 10년. 한정판 펀딩과 AI 소믈리에를 붙입니다.',
    image: '/images/people/cpo.svg',
  },
  {
    id: 'cdo',
    name: '이하늘',
    role: 'CDO',
    bio: '브랜드·패키지 디렉터. 기념주 라벨과 명인 병 스토리를 설계합니다.',
    image: '/images/people/cdo.svg',
  },
  {
    id: 'coo',
    name: '정민우',
    role: 'COO',
    bio: '콜드체인·양조장 출고 운영. 9개 권역 물류를 맞춥니다.',
    image: '/images/people/coo.svg',
  },
]

export const IR_ADVISORS: IrAdvisor[] = [
  {
    id: 'master',
    name: '조옥화 명인',
    role: '전통 증류 자문',
    bio: '안동 소주 가문. 한정판 원액과 테이스팅 기준을 검수합니다.',
    initials: '조',
  },
  {
    id: 'policy',
    name: '한지훈',
    role: '주류 인허가 자문',
    bio: '전 식약·주세 실무. 통신판매와 양조장 투어 인허가를 자문합니다.',
    initials: '한',
  },
  {
    id: 'wine',
    name: '소피 라미',
    role: '페어링 자문',
    bio: '미쉐린 2스타 소믈리에. 구독 박스 페어링 가이드를 검수합니다.',
    initials: '소',
  },
]

export const IR_CANVAS = [
  {
    id: 'partners',
    title: 'Key Partners',
    items: ['국가유산 명인 양조장', '못난이 과일 농가 협의체', '캘리그라피·라벨 창작 그룹'],
  },
  {
    id: 'activities',
    title: 'Key Activities',
    items: ['스토리 큐레이션', '디지털 품질·NFT 인증', '양조장 투어·클래스 매칭'],
  },
  {
    id: 'value',
    title: 'Value Propositions',
    items: ['리브랜딩 병과 기념주', '한랭 안전 배송', 'ESG 못난이 과일 스토리'],
  },
  {
    id: 'relations',
    title: 'Customer Relationships',
    items: ['프리미엄 구독 혜택', 'AI 소믈리에 추천', '한정 팝업 시음'],
  },
]
