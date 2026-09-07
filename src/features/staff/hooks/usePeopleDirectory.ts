import { useState } from 'react'
import type { WorkspaceRole } from '../../../shared/types/auth'
import { listAccounts, updateAccountRole } from '../../auth/utils/accountStorage'
import { performanceForAccount } from '../utils/performanceForAccount'

export function usePeopleDirectory() {
  const [accounts, setAccounts] = useState(() => listAccounts())
  const [error, setError] = useState('')

  function assign(accountId: string, role: WorkspaceRole) {
    setError('')
    try {
      updateAccountRole(accountId, role)
      setAccounts(listAccounts())
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : '등급을 바꿀 수 없습니다.')
    }
  }

  const performance = accounts
    .filter((account) => account.workspaceRole === 'staff' || account.workspaceRole === 'lead' || account.workspaceRole === 'admin')
    .map(performanceForAccount)
    .sort((a, b) => b.score - a.score)

  return { accounts, performance, error, assign }
}
