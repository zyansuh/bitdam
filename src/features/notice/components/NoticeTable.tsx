import { Link } from 'react-router-dom'
import { noticeCategoryLabel } from '../data/noticeTabs'
import type { SiteNoticePost } from '../types/notice'

interface NoticeTableProps {
  rows: SiteNoticePost[]
}

export default function NoticeTable({ rows }: NoticeTableProps) {
  if (rows.length === 0) {
    return <p className="notice-empty">해당 공지가 없습니다.</p>
  }

  return (
    <div className="notice-table-wrap">
      <table className="notice-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>제목</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{noticeCategoryLabel(row.category)}</td>
              <td>
                <Link to={`/notices/${row.id}`} className="notice-table__title">
                  {row.important ? <span className="notice-important">중요</span> : null}
                  {row.title}
                </Link>
              </td>
              <td>{row.date}</td>
              <td>{row.views.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
