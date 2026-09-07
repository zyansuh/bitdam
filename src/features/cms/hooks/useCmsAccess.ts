import { useMemo, useState } from 'react'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenAdminScope, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import { CMS_DOCUMENTS } from '../data/contentCatalog'
import { canEditCmsDocument } from '../utils/canEditCmsDocument'
import { grantsForAccount, setAccountGrant } from '../utils/cmsGrantStorage'

export function useCmsAccess() {
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const [version, setVersion] = useState(0)
  const isAdmin = canOpenAdminScope(role)

  const documents = useMemo(
    () => CMS_DOCUMENTS.filter((item) => canEditCmsDocument(user, item.id)),
    [user, version],
  )

  function toggleGrant(accountId: string, documentId: string, enabled: boolean) {
    setAccountGrant(accountId, documentId, enabled)
    setVersion((current) => current + 1)
  }

  return {
    user,
    isAdmin,
    documents,
    grantsForAccount: (accountId: string) => {
      void version
      return grantsForAccount(accountId)
    },
    toggleGrant,
  }
}
