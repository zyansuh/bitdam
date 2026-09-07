import { useParams } from 'react-router-dom'
import { getLearnArticle } from '../data/learnArticles'
import { isUnpublishedDraft } from '../utils/learnDraftStorage'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenCmsStudio, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'

export function useLearnArticle() {
  const { slug = '' } = useParams()
  const { user } = useAuth()
  const article = getLearnArticle(slug)
  const staff = canOpenCmsStudio(resolveWorkspaceRole(user))
  const locked = Boolean(article && isUnpublishedDraft(slug) && !staff)
  return { article: locked ? undefined : article, locked, slug }
}
