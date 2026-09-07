import { Link } from 'react-router-dom'
import StaffLayout from '../../staff/components/StaffLayout'
import { useCmsAccess } from '../hooks/useCmsAccess'

export default function CmsListPage() {
  const { documents } = useCmsAccess()

  return (
    <StaffLayout allowCms>
      <section className="lounge-panel">
        <h2>전체 글 관리</h2>
        <p className="staff-lead">사이트에 노출되는 카피를 고릅니다. 팀장은 ADMIN이 연 문서만 보입니다.</p>
        <ul className="cms-list">
          {documents.length === 0 ? <li>수정 권한이 있는 문서가 없습니다.</li> : null}
          {documents.map((item) => (
            <li key={item.id} className="cms-list__item">
              <div>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
              </div>
              <div className="cms-list__actions">
                <Link to={item.viewTo} className="lounge-btn lounge-btn--ghost">
                  보기
                </Link>
                <Link to={item.editTo} className="lounge-btn">
                  수정
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </StaffLayout>
  )
}
