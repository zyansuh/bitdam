import PeopleTable from '../components/PeopleTable'
import StaffLayout from '../components/StaffLayout'
import { usePeopleDirectory } from '../hooks/usePeopleDirectory'

export default function AdminPeoplePage() {
  const directory = usePeopleDirectory()

  return (
    <StaffLayout>
      <section className="lounge-panel">
        <h2>회원가입 계정에 직원 등급 부여</h2>
        <p className="staff-lead">
          팀장은 공지·스토리 등 사이트 카피를 바꿀 수 있습니다. 직원은 공지 작성과 전체 공방 라운지 조회가 가능합니다.
        </p>
        {directory.error ? <p className="lounge-verify__error">{directory.error}</p> : null}
        <PeopleTable accounts={directory.accounts} onAssign={directory.assign} />
      </section>
    </StaffLayout>
  )
}
