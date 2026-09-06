import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { formatUserHonorific } from '../../../shared/utils/formatUserHonorific'
import CommunityCategoryNav from '../components/CommunityCategoryNav'
import CommunityHashtags from '../components/CommunityHashtags'
import CommunityIndexList from '../components/CommunityIndexList'
import CommunityListCard from '../components/CommunityListCard'
import CommunityLoginPrompt from '../components/CommunityLoginPrompt'
import CommunityProfileCard from '../components/CommunityProfileCard'
import CommunityPromoCard from '../components/CommunityPromoCard'
import { useCommunityPosts } from '../hooks/useCommunityPosts'

export default function CommunityPage() {
  const { user, isLoggedIn } = useAuth()
  const { mine, shown, tag, setTag, category, setCategory } = useCommunityPosts(user)

  return (
    <PageLayout>
      <Navbar />
      <main className="community-page">
        <div className="community-page__layout">
          <aside className="community-aside">
            <CommunityProfileCard
              name={isLoggedIn && user ? formatUserHonorific(user.nickname) : '커뮤니티'}
              image={user?.profileImage}
              postCount={mine.length}
            />
            <CommunityCategoryNav active={category} onSelect={setCategory} />
            <CommunityHashtags active={tag} onSelect={setTag} />
          </aside>
          <div>
            <div className="community-list__head">
              <h1 className="community-list__title">내 글 목록</h1>
              {isLoggedIn ? (
                <Link to="/community/new" className="community-list__write">
                  글쓰기
                </Link>
              ) : null}
            </div>
            {!isLoggedIn ? <CommunityLoginPrompt /> : null}
            {isLoggedIn && shown.length === 0 ? (
              <p className="community-empty">아직 글이 없습니다. 글쓰기에서 첫 기록을 남겨 보세요.</p>
            ) : null}
            <div className="community-feed">
              {shown.map((post) => (
                <CommunityListCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <aside className="community-aside">
            <CommunityPromoCard />
            <CommunityIndexList posts={mine} />
          </aside>
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
