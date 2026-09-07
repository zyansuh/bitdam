import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canModerateContent, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import CommunityCategoryNav from '../components/CommunityCategoryNav'
import CommunityHashtags from '../components/CommunityHashtags'
import CommunityWriteForm from '../components/CommunityWriteForm'
import { useCommunityPosts } from '../hooks/useCommunityPosts'

export default function CommunityEditPage() {
  const { id = '' } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const moderate = canModerateContent(resolveWorkspaceRole(user))
  const { ready, getPost, updatePost, category, setCategory, setTag, tag } = useCommunityPosts(user, { moderate })
  const post = getPost(id)

  return (
    <PageLayout>
      <Navbar />
      <main className="community-page">
        <div className="community-page__write-layout">
          <aside className="community-aside">
            <CommunityCategoryNav active={category} onSelect={setCategory} />
            <CommunityHashtags active={tag} onSelect={setTag} />
          </aside>
          <div>
            {!ready ? (
              <div className="community-empty">
                <p>글을 불러오는 중입니다.</p>
              </div>
            ) : !post ? (
              <div className="community-empty">
                <p>수정할 글을 찾을 수 없습니다.</p>
                <Link to="/community" className="community-prompt__link">
                  목록으로
                </Link>
              </div>
            ) : (
              <CommunityWriteForm
                mode="edit"
                hint={
                  moderate
                    ? 'ADMIN은 작성자와 관계없이 글을 수정할 수 있습니다.'
                    : '본인이 쓴 글만 수정할 수 있습니다.'
                }
                initialTitle={post.title}
                initialBody={post.body}
                initialImage={post.image}
                initialCategory={post.category}
                onSubmit={(input) => {
                  updatePost(post.id, input)
                  navigate(`/community/${post.id}`)
                }}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
