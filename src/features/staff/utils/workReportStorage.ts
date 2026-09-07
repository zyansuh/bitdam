import type { WorkReport } from '../types/workReport'

const KEY = 'bitdam.staff.work-reports'

export function readWorkReports(): WorkReport[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as WorkReport[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function writeWorkReports(rows: WorkReport[]): void {
  localStorage.setItem(KEY, JSON.stringify(rows))
}

export function upsertWorkReport(row: WorkReport): void {
  writeWorkReports([row, ...readWorkReports().filter((item) => item.id !== row.id)])
}

export function getWorkReport(id: string | undefined): WorkReport | undefined {
  if (!id) return undefined
  return readWorkReports().find((row) => row.id === id)
}

export function createWorkReportId(): string {
  return `WR-${Date.now().toString(36).toUpperCase()}`
}
