export const mypageStats = [
  { label: '진행 중 주문', value: '2' },
  { label: '보유 쿠폰', value: '3' },
  { label: '보유 포인트', value: '4,500P' },
  { label: '명인 인증서', value: '4' },
]

export const mypageOrders = [
  { id: 'BD-240918-01', date: '2026.09.12', name: '명인 안동소주 45', amount: 72000, status: '배송 중' },
  { id: 'BD-240901-08', date: '2026.09.01', name: '한산 소곡주 선물세트', amount: 54000, status: '배송 완료' },
  { id: 'BD-240820-03', date: '2026.08.20', name: '삼해소주 미니 2병', amount: 38000, status: '배송 완료' },
]

export const mypageCertificates = [
  {
    id: '0820',
    name: '명인 안동소주',
    desc: '저온 발효로 담근 항아리 한정 인증',
    image: '/images/catalog/makgeolli-1.svg',
  },
  {
    id: '0644',
    name: '한산 소곡주',
    desc: '우희열 명인 시즌 항아리 디지털 증서',
    image: '/images/catalog/makgeolli-1.svg',
  },
  {
    id: '0312',
    name: '삼해소주',
    desc: '세 번 내린 증류의 결을 기록한 NFT',
    image: '/images/catalog/makgeolli-1.svg',
  },
  {
    id: '0198',
    name: '문배술',
    desc: '밀 향을 담은 국가무형유산 인증',
    image: '/images/catalog/makgeolli-1.svg',
  },
]

export const mypageCoupons = [
  { id: 'WELCOME', name: '첫 구매 10%', expire: '2026.12.31', leftover: '사용 전' },
  { id: 'TOUR5', name: '양조장 투어 5천원', expire: '2026.10.31', leftover: '사용 전' },
  { id: 'SET3', name: '세트 3만원 이상 무료배송', expire: '2026.11.15', leftover: '사용 전' },
]

export const interestOptions = ['증류식소주', '약주/청주', '탁주(막걸리)', '과실주', '와인/리큐르']
