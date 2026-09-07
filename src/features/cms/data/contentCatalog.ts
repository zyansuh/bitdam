export interface CmsDocument {
  id: string
  title: string
  summary: string
  viewTo: string
  editTo: string
}

export const CMS_DOCUMENTS: CmsDocument[] = [
  {
    id: 'ir.leaders',
    title: 'IR 리더십',
    summary: '대표자 이름, 사진, 소개',
    viewTo: '/ir#leaders',
    editTo: '/mypage/admin/content/ir-leaders',
  },
  {
    id: 'ir.round',
    title: 'IR 프리 A 요강',
    summary: '라운드 제목, 소개, 목표 금액',
    viewTo: '/ir#round',
    editTo: '/mypage/admin/content/ir-round',
  },
  {
    id: 'learn.desk',
    title: '술 상식 하루 한 장',
    summary: 'AI 초안을 받아 날짜에 맞춰 공개',
    viewTo: '/learn',
    editTo: '/mypage/admin/content/learn',
  },
]
