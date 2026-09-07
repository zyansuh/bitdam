import { workspaceRoleLabel } from '../../../shared/utils/workspaceRole'
import type { StaffPerformanceRow } from '../types/staff'

interface StaffPerformanceBoardProps {
  rows: StaffPerformanceRow[]
}

export default function StaffPerformanceBoard({ rows }: StaffPerformanceBoardProps) {
  return (
    <div className="lounge-table-wrap">
      <table className="lounge-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>등급</th>
            <th>공지 기여</th>
            <th>커뮤니티 글</th>
            <th>담당 공방</th>
            <th>성과 점수</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{workspaceRoleLabel(row.role)}</td>
              <td>{row.notices}건</td>
              <td>{row.loungeReviews}건</td>
              <td>{row.shopsCovered}곳</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
