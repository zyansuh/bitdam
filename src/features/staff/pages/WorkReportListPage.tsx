import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../../../shared/components/feedback/EmptyState'
import StaffLayout from '../components/StaffLayout'
import { workReportKindLabel, workReportStatusLabel } from '../data/workReportKinds'
import { useWorkReports } from '../hooks/useWorkReports'
import type { WorkReportStatus } from '../types/workReport'

export default function WorkReportListPage() {
  const { rows } = useWorkReports()
  const [status, setStatus] = useState<WorkReportStatus | 'all'>('all')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const visible = useMemo(() => {
    return rows.filter((row) => {
      if (status !== 'all' && row.status !== status) return false
      const day = row.createdAt.slice(0, 10)
      if (from && day < from) return false
      if (to && day > to) return false
      return true
    })
  }, [from, rows, status, to])

  return (
    <StaffLayout allowStaff>
      <section className="lounge-panel">
        <div className="lounge-panel__head">
          <h2>내부 업무 보고</h2>
          <Link to="/mypage/staff/work-reports/new" className="lounge-btn">
            보고 작성
          </Link>
        </div>
        <p className="staff-lead">직원은 본인 보고만, 팀장·ADMIN은 전체 보고를 봅니다.</p>
        <div className="lounge-order-filters">
          <label>
            시작일
            <input type="date" value={from} onChange={(event) => setFrom(event.target.value)} />
          </label>
          <label>
            종료일
            <input type="date" value={to} onChange={(event) => setTo(event.target.value)} />
          </label>
          <label>
            상태
            <select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}>
              <option value="all">전체</option>
              <option value="draft">작성중</option>
              <option value="submitted">제출</option>
              <option value="reviewed">확인완료</option>
            </select>
          </label>
        </div>
        <div className="lounge-table-wrap">
          <table className="lounge-table">
            <thead>
              <tr>
                <th>유형</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <EmptyState title="보고가 없습니다" body="날짜나 상태를 바꿔 보세요." />
                  </td>
                </tr>
              ) : (
                visible.map((row) => (
                  <tr key={row.id}>
                    <td>{workReportKindLabel(row.kind)}</td>
                    <td>
                      <Link to={`/mypage/staff/work-reports/${row.id}`} className="lounge-denied__link">
                        {row.title}
                      </Link>
                    </td>
                    <td>{row.authorName}</td>
                    <td>{new Date(row.createdAt).toLocaleString('ko-KR')}</td>
                    <td>{workReportStatusLabel(row.status)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </StaffLayout>
  )
}
