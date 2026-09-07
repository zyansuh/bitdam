import { useEffect, useState } from 'react'
import type { WorkspaceRole } from '../../../shared/types/auth'
import { listAccounts, updateAccountRole } from '../../auth/utils/accountStorage'
import { listCommunityPosts } from '../../community/api/communityApi'
import { listNotices } from '../../notice/api/noticeApi'
import { SELLER_SHOPS } from '../../lounge/data/sellerShops'
import { performanceForAccount } from '../utils/performanceForAccount'
import type { StaffPerformanceRow } from '../types/staff'

export function usePeopleDirectory() {
  const [accounts, setAccounts] = useState(() => listAccounts())
  const [error, setError] = useState('')
  const [performance, setPerformance] = useState<StaffPerformanceRow[]>([])

  function assign(accountId: string, role: WorkspaceRole) {
    setError('')
    try {
      updateAccountRole(accountId, role)
      setAccounts(listAccounts())
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : '등급을 바꿀 수 없습니다.')
    }
  }

  useEffect(() => {
    let alive = true
    Promise.all([listNotices(), listCommunityPosts()]).then(([notices, posts]) => {
      if (!alive) return
      const rows = accounts
        .filter(
          (account) =>
            account.workspaceRole === 'staff' ||
            account.workspaceRole === 'lead' ||
            account.workspaceRole === 'admin',
        )
        .map((account) =>
          performanceForAccount(account, {
            notices: notices.filter((post) => post.authorId === account.id).length,
            communityPosts: posts.filter((post) => post.authorId === account.id).length,
            shopCount: SELLER_SHOPS.length,
          }),
        )
        .sort((a, b) => b.score - a.score)
      setPerformance(rows)
    })
    return () => {
      alive = false
    }
  }, [accounts])

  return { accounts, performance, error, assign }
}
