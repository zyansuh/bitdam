import { useMemo, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canReviewWorkReport, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import type { WorkReport, WorkReportKind, WorkReportStatus } from '../types/workReport'
import { createWorkReportId, getWorkReport, readWorkReports, upsertWorkReport } from '../utils/workReportStorage'

export function useWorkReports() {
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const [version, setVersion] = useState(0)
  const canReview = canReviewWorkReport(role)

  const rows = useMemo(() => {
    const all = readWorkReports()
    if (canReview) return all
    return all.filter((row) => row.authorId === user?.id)
  }, [canReview, user?.id, version])

  function save(input: {
    id?: string
    kind: WorkReportKind
    title: string
    body: string
    status: WorkReportStatus
  }): WorkReport {
    const now = new Date().toISOString()
    const existing = getWorkReport(input.id)
    const row: WorkReport = {
      id: existing?.id ?? createWorkReportId(),
      kind: input.kind,
      title: input.title.trim(),
      body: input.body.trim(),
      status: input.status,
      authorId: existing?.authorId ?? user?.id ?? 'unknown',
      authorName: existing?.authorName ?? user?.nickname ?? '직원',
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    }
    upsertWorkReport(row)
    setVersion((current) => current + 1)
    return row
  }

  function review(id: string) {
    const existing = getWorkReport(id)
    if (!existing || !canReview) return
    upsertWorkReport({ ...existing, status: 'reviewed', updatedAt: new Date().toISOString() })
    setVersion((current) => current + 1)
  }

  return { rows, canReview, save, review, getWorkReport }
}
