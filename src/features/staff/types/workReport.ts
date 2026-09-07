export type WorkReportKind = 'lounge' | 'facility' | 'issue' | 'duty' | 'other'
export type WorkReportStatus = 'draft' | 'submitted' | 'reviewed'

export interface WorkReport {
  id: string
  kind: WorkReportKind
  title: string
  body: string
  status: WorkReportStatus
  authorId: string
  authorName: string
  createdAt: string
  updatedAt: string
}
