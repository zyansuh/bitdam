import { useNavigate } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canModerateContent, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import CommunityCategoryNav from '../components/CommunityCategoryNav'
import CommunityHashtags from '../components/CommunityHashtags'
import CommunityLoginPrompt from '../components/CommunityLoginPrompt'
import CommunityWriteForm from '../components/CommunityWriteForm'
import { useCommunityPosts } from '../hooks/useCommunityPosts'
import { clearCommunityDraft, loadCommunityDraft, saveCommunityDraft } from '../utils/communityDrafts'

export default function CommunityWritePage() {
  const { user, isLoggedIn } = useAuth()
  const moderate = canModerateContent(resolveWorkspaceRole(user))
  const { addPost, category, setCategory, setTag, tag } = useCommunityPosts(user, { moderate })
  const navigate = useNavigate()
  const draft = loadCommunityDraft()

  return (
    <PageLayout>
      <Navbar />
      <main className="community-page">
        <div className="community-page__write-layout">
          <aside className="community-aside">
            <CommunityCategoryNav active={category} onSelect={setCategory} />
            <CommunityHashtags active={tag} onSelect={setTag} />
            <p className="community-index__empty">
              {draft ? `임시저장 ${new Date(draft.savedAt).toLocaleString('ko-KR')}` : '저장된 임시글이 없습니다.'}
            </p>
          </aside>
          <div>
            {isLoggedIn ? (
              <CommunityWriteForm
                hint={
                  moderate
                    ? 'ADMIN은 공개 피드를 검수하고 숨기거나 고칠 수 있습니다.'
                    : '커뮤니티 예의를 지켜 주세요. 글은 회원 공개 피드에 올라가고 ADMIN이 검수할 수 있습니다.'
                }
                initialTitle={draft?.title}
                initialBody={draft?.body}
                initialImage={draft?.image}
                initialCategory={draft?.category}
                onSaveDraft={(input) => {
                  saveCommunityDraft({ ...input, savedAt: new Date().toISOString() })
                }}
                onSubmit={(input) => {
                  const id = addPost(input)
                  clearCommunityDraft()
                  if (id) navigate(`/community/${id}`)
                }}
              />
            ) : (
              <CommunityLoginPrompt />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
