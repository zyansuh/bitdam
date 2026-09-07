import { useCmsAccess } from '../../cms/hooks/useCmsAccess'
import PeopleTable from '../components/PeopleTable'
import StaffLayout from '../components/StaffLayout'
import { usePeopleDirectory } from '../hooks/usePeopleDirectory'

export default function AdminPeoplePage() {
  const directory = usePeopleDirectory()
  const cms = useCmsAccess()

  return (
    <StaffLayout>
      <section className="lounge-panel">
        <h2>회원가입 계정에 직원 등급 부여</h2>
        <p className="staff-lead">
          팀장은 부여받은 콘텐츠만 수정할 수 있습니다. 직원은 사이트 카피를 바꾸지 못합니다.
        </p>
        {directory.error ? <p className="lounge-verify__error">{directory.error}</p> : null}
        <PeopleTable
          accounts={directory.accounts}
          grantsForAccount={cms.grantsForAccount}
          onAssign={directory.assign}
          onToggleGrant={cms.toggleGrant}
        />
      </section>
    </StaffLayout>
  )
}
