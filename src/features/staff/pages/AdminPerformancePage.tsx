import StaffLayout from '../components/StaffLayout'
import StaffPerformanceBoard from '../components/StaffPerformanceBoard'
import { usePeopleDirectory } from '../hooks/usePeopleDirectory'

export default function AdminPerformancePage() {
  const directory = usePeopleDirectory()

  return (
    <StaffLayout>
      <section className="lounge-panel">
        <h2>직원·팀장 성과</h2>
        <p className="staff-lead">ADMIN만 전 직원의 공지 기여, 라운지 점검, 담당 공방 커버를 봅니다. 숫자는 로컬 데모입니다.</p>
        <StaffPerformanceBoard rows={directory.performance} />
      </section>
    </StaffLayout>
  )
}
