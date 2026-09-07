import StaffLayout from '../components/StaffLayout'
import StaffPerformanceBoard from '../components/StaffPerformanceBoard'
import { usePeopleDirectory } from '../hooks/usePeopleDirectory'

export default function AdminPerformancePage() {
  const directory = usePeopleDirectory()

  return (
    <StaffLayout>
      <section className="lounge-panel">
        <h2>직원·팀장 성과</h2>
        <p className="staff-lead">
          ADMIN만 봅니다. 공지 작성·커뮤니티 글은 이 브라우저에 저장된 실제 건수이고, 담당 공방은 직원·팀장·ADMIN은 전체 입점 공방 수, 셀러 겸직이면 본인 공방 1곳입니다.
        </p>
        <StaffPerformanceBoard rows={directory.performance} />
      </section>
    </StaffLayout>
  )
}
