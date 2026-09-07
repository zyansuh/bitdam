import type { WorkReportKind, WorkReportStatus } from '../types/workReport'

export const WORK_REPORT_KINDS: { id: WorkReportKind; label: string }[] = [
  { id: 'lounge', label: '라운지 점검 보고' },
  { id: 'facility', label: '시설/운영 점검' },
  { id: 'issue', label: '특이사항' },
  { id: 'duty', label: '업무 보고' },
  { id: 'other', label: '기타 내부 보고서' },
]

export function workReportKindLabel(kind: WorkReportKind): string {
  return WORK_REPORT_KINDS.find((item) => item.id === kind)?.label ?? kind
}

export function workReportStatusLabel(status: WorkReportStatus): string {
  if (status === 'draft') return '작성중'
  if (status === 'reviewed') return '확인완료'
  return '제출'
}
