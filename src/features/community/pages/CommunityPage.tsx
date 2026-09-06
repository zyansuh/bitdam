import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import CommunityComposer from '../components/CommunityComposer'
import CommunityIndexList from '../components/CommunityIndexList'
import CommunityLoginPrompt from '../components/CommunityLoginPrompt'
import CommunityPostList from '../components/CommunityPostList'
import { useCommunityPosts } from '../hooks/useCommunityPosts'

export default function CommunityPage() {
  const { user, isLoggedIn } = useAuth()
  const { mine, addPost, removePost } = useCommunityPosts(user)

  return (
    <PageLayout>
      <Navbar />
      <main className="community-page">
        <div className="community-page__layout">
          <aside className="community-aside">
            <section className="community-profile">
              <h1 className="community-profile__name">
                {isLoggedIn && user ? formatUserHonorific(user.nickname) : '커뮤니티'}
              </h1>
              <p className="community-profile__meta">
                {isLoggedIn ? `내 글 ${mine.length}편` : '본인 글만 올리는 블로그'}
              </p>
            </section>
            <CommunityIndexList posts={mine} />
          </aside>
          <div>
            {isLoggedIn ? <CommunityComposer onSubmit={addPost} /> : <CommunityLoginPrompt />}
            {isLoggedIn ? <CommunityPostList posts={mine} onDelete={removePost} /> : null}
          </div>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
