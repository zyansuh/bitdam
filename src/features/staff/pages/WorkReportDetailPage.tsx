import { Link, useParams } from 'react-router-dom'
import StaffLayout from '../components/StaffLayout'
import { workReportKindLabel, workReportStatusLabel } from '../data/workReportKinds'
import { useWorkReports } from '../hooks/useWorkReports'

export default function WorkReportDetailPage() {
  const { id } = useParams()
  const { getWorkReport, canReview, review } = useWorkReports()
  const row = getWorkReport(id)

  return (
    <StaffLayout allowStaff>
      <section className="lounge-panel">
        {!row ? (
          <p>보고를 찾을 수 없습니다.</p>
        ) : (
          <>
            <p className="staff-lead">
              {workReportKindLabel(row.kind)} · {workReportStatusLabel(row.status)}
            </p>
            <h2>{row.title}</h2>
            <p className="staff-lead">
              {row.authorName} · {new Date(row.createdAt).toLocaleString('ko-KR')}
            </p>
            <p className="staff-lead">{row.body}</p>
            {canReview && row.status !== 'reviewed' ? (
              <button type="button" className="lounge-btn" onClick={() => review(row.id)}>
                확인 완료로 표시
              </button>
            ) : null}
            <p>
              <Link to="/mypage/staff/work-reports" className="lounge-denied__link">
                목록으로
              </Link>
            </p>
          </>
        )}
      </section>
    </StaffLayout>
  )
}
