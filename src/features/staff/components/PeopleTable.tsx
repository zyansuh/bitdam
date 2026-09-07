import type { WorkspaceRole } from '../../../shared/types/auth'
import { ASSIGNABLE_ROLES, workspaceRoleLabel } from '../../../shared/utils/workspaceRole'
import type { EmailAccount } from '../../auth/types/account'
import { CMS_DOCUMENTS } from '../../cms/data/contentCatalog'

interface PeopleTableProps {
  accounts: EmailAccount[]
  grantsForAccount: (accountId: string) => string[]
  onAssign: (accountId: string, role: WorkspaceRole) => void
  onToggleGrant: (accountId: string, documentId: string, enabled: boolean) => void
}

export default function PeopleTable({ accounts, grantsForAccount, onAssign, onToggleGrant }: PeopleTableProps) {
  return (
    <div className="lounge-table-wrap">
      <table className="lounge-table">
        <thead>
          <tr>
            <th>닉네임</th>
            <th>이메일</th>
            <th>현재 등급</th>
            <th>등급 부여</th>
            <th>콘텐츠 권한</th>
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
              <td>
                {account.workspaceRole === 'lead' ? (
                  <ul className="cms-grants">
                    {CMS_DOCUMENTS.map((doc) => {
                      const on = grantsForAccount(account.id).includes(doc.id)
                      return (
                        <li key={doc.id}>
                          <label>
                            <input
                              type="checkbox"
                              checked={on}
                              onChange={(event) => onToggleGrant(account.id, doc.id, event.target.checked)}
                            />
                            {doc.title}
                          </label>
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  '—'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
