import type { SiteNoticePost } from '../types/notice'

export const NOTICE_PAGE_SIZE = 5

export const noticeSeed: SiteNoticePost[] = [
  { id: 's1', category: 'shipping', title: '설 연휴 택배 마감 및 순차 출고 안내', body: '1월 24일 오후 2시 이전 결제 건까지 명절 전 출고를 목표로 합니다. 이후 주문은 연휴 이후 순차 발송됩니다. 주류는 성인 수령 확인이 필요합니다.', date: '2026.01.20', views: 2140, important: true },
  { id: 's2', category: 'event', title: '새해 맞이 포인트 2배 적립 이벤트', body: '2월 1일부터 14일까지 전통주 단품 구매 시 기본 적립의 2배를 드립니다. 한정판·양조장 투어는 제외됩니다.', date: '2026.01.18', views: 1882, important: true },
  { id: 's3', category: 'shipping', title: '폭설로 일부 지역 배송이 하루 늦어집니다', body: '강원·충북 산간은 기상 영향으로 1일 지연될 수 있습니다. 운송장은 출고 당일 오후에 등록됩니다.', date: '2026.01.15', views: 960, important: false },
  { id: 's4', category: 'service', title: '1월 28일 새벽 시스템 점검 안내', body: '오전 2시부터 5시까지 주문·로그인이 잠시 중단됩니다. 점검은 예고 없이 10분 단위로 연장될 수 있습니다.', date: '2026.01.12', views: 740, important: false },
  { id: 's5', category: 'service', title: '주세 개편에 따른 영수증 표기 변경', body: '2026년 주세 안내가 영수증 부가세 항목에 반영됩니다. 결제 금액은 동일합니다.', date: '2026.01.10', views: 512, important: false },
  { id: 's6', category: 'event', title: '성수동 팝업 시음회 초대', body: '2월 7일~8일 성수에서 명인 토크와 3종 테이스팅을 진행합니다. 알림 센터 초대장으로 입장해 주세요.', date: '2026.01.08', views: 1304, important: false },
  { id: 's7', category: 'shipping', title: '제주·도서산간 추가 운임 안내', body: '3만 원 미만 주문은 기본 3,000원에 더해 제주 3,000원, 일부 도서 4,000원이 붙습니다.', date: '2026.01.05', views: 688, important: false },
  { id: 's8', category: 'service', title: '성인인증 갱신 주기 안내', body: '최초 인증 후 일정 기간이 지나면 주류 구매 전 갱신을 요청할 수 있습니다.', date: '2025.12.28', views: 421, important: false },
  { id: 's9', category: 'event', title: '첫 구매 쿠폰 10% 연장', body: 'WELCOME 쿠폰 유효기간을 3월 31일까지 연장합니다. 마이페이지 쿠폰함에서 확인하세요.', date: '2025.12.22', views: 905, important: false },
  { id: 's10', category: 'shipping', title: '전통주 수령 시 신분증 확인', body: '만 19세 미만에게는 전달되지 않으며, 부재 시 재배송을 안내합니다.', date: '2025.12.18', views: 1577, important: true },
  { id: 's11', category: 'service', title: '카카오 로그인 콜백 도메인 안내', body: '로컬과 배포 origin을 카카오 콘솔에 각각 등록해야 합니다. Redirect URI 환경 변수는 사용하지 않습니다.', date: '2025.12.10', views: 233, important: false },
  { id: 's12', category: 'event', title: '양조장 투어 동반 1인 할인', body: '12월 투어 예약 시 동반 1인 5천 원을 할인합니다. 클래스 예약과 중복되지 않습니다.', date: '2025.12.02', views: 611, important: false },
  { id: 's13', category: 'shipping', title: '무료배송 기준 3만 원 유지', body: '세트·단품 합산 3만 원 이상이면 기본 배송비가 없습니다. 쿠폰 무료배송이 있으면 쿠폰이 우선합니다.', date: '2025.11.28', views: 804, important: false },
  { id: 's14', category: 'service', title: '마이페이지 NFT 인증서 메뉴 오픈', body: '한정 항아리 디지털 보증서를 마이페이지 전통주 인증서에서 볼 수 있습니다.', date: '2025.11.20', views: 390, important: false },
  { id: 's15', category: 'event', title: '커뮤니티 첫 글 포인트', body: '본인 글 첫 작성 시 500P를 적립합니다. 커뮤니티는 현재 본인에게만 보입니다.', date: '2025.11.14', views: 277, important: false },
  { id: 's16', category: 'shipping', title: '출고 후 주소 변경 제한', body: '준비 중에는 1:1 문의로 변경할 수 있고, 이미 출고된 건은 변경이 어렵습니다.', date: '2025.11.08', views: 459, important: false },
  { id: 's17', category: 'service', title: '알림 센터 오픈', body: '주문·이벤트·커뮤니티·시스템 알림을 알림 센터에서 모아 볼 수 있습니다.', date: '2025.11.01', views: 318, important: false },
  { id: 's18', category: 'event', title: '한산 소곡주 명인 에디션 재입고', body: '충남 서천 한산 소곡주가 소량 재입고되었습니다. 품절 시 알림을 받아 보세요.', date: '2025.10.22', views: 1022, important: false },
  { id: 's19', category: 'shipping', title: '명절 이후 반품 창구 안내', body: '단순 변심은 수령 7일 이내, 미개봉에 한합니다. 파손은 사진과 주문번호를 1:1로 보내 주세요.', date: '2025.10.15', views: 540, important: false },
  { id: 's20', category: 'service', title: '고객센터 FAQ 분류 개편', body: '주문/결제, 배송, 교환/반품, 회원, 포인트, 기타로 나누었습니다.', date: '2025.10.08', views: 201, important: false },
  { id: 's21', category: 'event', title: '클래스 예약 얼리버드', body: '11월 클래스 신청 시 재료비를 2천 원 할인합니다. /classes에서 일정을 고르세요.', date: '2025.10.01', views: 366, important: false },
  { id: 's22', category: 'shipping', title: '주말 출고 시험 운영', body: '토요일 오전 결제 건 일부를 당일 출고 시험합니다. 지역에 따라 월요 도착이 기본입니다.', date: '2025.09.24', views: 288, important: false },
  { id: 's23', category: 'service', title: '다크 모드 로그인 유지', body: '카카오 로그인 뒤에도 테마가 유지되도록 쿠키와 state를 사용합니다.', date: '2025.09.18', views: 154, important: false },
  { id: 's24', category: 'event', title: '리뷰 적립 이벤트 종료 안내', body: '상품 리뷰 포인트 이벤트는 9월 30일에 종료됩니다. 이미 작성한 적립은 유지됩니다.', date: '2025.09.12', views: 199, important: false },
  { id: 's25', category: 'shipping', title: '여름 고온기 주류 포장 보강', body: '7~8월 출고 건은 보냉 완충을 추가합니다. 수령 후 바로 서늘한 곳에 보관해 주세요.', date: '2025.09.05', views: 447, important: false },
]
