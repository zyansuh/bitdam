import type { WorkspaceRole } from '../../../shared/types/auth'
import { ASSIGNABLE_ROLES, workspaceRoleLabel } from '../../../shared/utils/workspaceRole'
import type { EmailAccount } from '../../auth/types/account'

interface PeopleTableProps {
  accounts: EmailAccount[]
  onAssign: (accountId: string, role: WorkspaceRole) => void
}

export default function PeopleTable({ accounts, onAssign }: PeopleTableProps) {
  return (
    <div className="lounge-table-wrap">
      <table className="lounge-table">
        <thead>
          <tr>
            <th>닉네임</th>
            <th>이메일</th>
            <th>현재 등급</th>
            <th>등급 부여</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.nickname}</td>
              <td>{account.email}</td>
              <td>{workspaceRoleLabel(account.workspaceRole ?? 'member')}</td>
              <td>
                <select
                  value={account.workspaceRole ?? 'member'}
                  onChange={(event) => onAssign(account.id, event.target.value as WorkspaceRole)}
                >
                  {ASSIGNABLE_ROLES.map((role) => (
                    <option key={role} value={role}>
                      {workspaceRoleLabel(role)}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
