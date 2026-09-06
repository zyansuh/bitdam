import type { SiteNotice } from '../types/siteNotice'

export const noticeMock: SiteNotice[] = [
  {
    id: 'n1',
    kind: 'shipping',
    title: "주문하신 '안산 소곡주 외 1' 배송 시작",
    body: '오늘 오전에 출고되어 택배로 이동 중입니다. 운송장으로 위치를 확인할 수 있어요.',
    time: '10분 전',
    actionLabel: '배송 조회하기',
    actionTo: '/mypage',
  },
  {
    id: 'n2',
    kind: 'event',
    title: '성수동 팝업스토어 초대장',
    body: '한정 시음과 명인 토크가 있는 팝업에 초대되었습니다. 기간 안에 입장권을 확인해 주세요.',
    time: '2시간 전',
    actionLabel: '초대장 확인하기',
    actionTo: '/',
  },
  {
    id: 'n3',
    kind: 'community',
    title: '지니_전통주덕후님이 회원님의 글에 댓글을 남겼습니다',
    body: '이 항아리 향이 정말 곱네요. 다음에 양조장 투어 후기도 부탁드려요.',
    time: '어제',
    actionLabel: '댓글 확인하기',
    actionTo: '/community',
  },
  {
    id: 'n4',
    kind: 'system',
    title: '[안내] 만 19세 성인인증 갱신 완료',
    body: '성인인증이 갱신되어 주류 구매와 수령에 문제가 없습니다.',
    time: '3일 전',
    actionLabel: '내 정보 관리',
    actionTo: '/account',
  },
]
