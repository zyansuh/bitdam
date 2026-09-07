import { Link } from 'react-router-dom'
import StaffLayout from '../components/StaffLayout'
import { workReportKindLabel, workReportStatusLabel } from '../data/workReportKinds'
import { useWorkReports } from '../hooks/useWorkReports'

export default function WorkReportListPage() {
  const { rows } = useWorkReports()

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
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5}>등록된 보고가 없습니다.</td>
                </tr>
              ) : (
                rows.map((row) => (
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
