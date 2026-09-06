import { Link, useNavigate, useParams } from 'react-router-dom'
import { Heart, MessageCircle } from 'lucide-react'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import Navbar from '../../../shared/components/navigation/Navbar'
import { useAuth } from '../../../shared/hooks/useAuth'
import { communityCategoryLabel } from '../data/communityCategories'
import CommunityCommentBox from '../components/CommunityCommentBox'
import CommunityIndexList from '../components/CommunityIndexList'
import CommunityPromoCard from '../components/CommunityPromoCard'
import { useCommunityPosts } from '../hooks/useCommunityPosts'

export default function CommunityPostPage() {
  const { id = '' } = useParams()
  const { user, isLoggedIn } = useAuth()
  const navigate = useNavigate()
  const { mine, getPost, likePost, addComment, removePost } = useCommunityPosts(user)
  const post = getPost(id)

  return (
    <PageLayout>
      <Navbar />
      <main className="community-page">
        {!post ? (
          <div className="community-empty">
            <p>글을 찾을 수 없습니다. 본인이 쓴 글만 볼 수 있습니다.</p>
            <Link to="/community" className="community-prompt__link">
              목록으로
            </Link>
          </div>
        ) : (
          <div className="community-page__detail-layout">
            <article className="community-detail">
              <p className="community-list-card__badge">{communityCategoryLabel(post.category)}</p>
              <h1 className="community-detail__title">{post.title}</h1>
              <p className="community-detail__meta">
                {post.authorName} · {new Date(post.createdAt).toLocaleString('ko-KR')}
              </p>
              {post.image ? <img src={post.image} alt="" className="community-detail__photo" /> : null}
              <p className="community-detail__body">{post.body}</p>
              {post.tags.length > 0 ? (
                <p className="community-detail__tags">{post.tags.join(' ')}</p>
              ) : null}
              <div className="community-card__actions">
                <button type="button" className="community-card__react" onClick={() => likePost(post.id)}>
                  <Heart size={16} strokeWidth={1.6} />
                  {post.likes}
                </button>
                <span className="community-card__react">
                  <MessageCircle size={16} strokeWidth={1.6} />
                  {post.comments.length}
                </span>
                <button
                  type="button"
                  className="community-card__delete"
                  onClick={() => {
                    removePost(post.id)
                    navigate('/community')
                  }}
                >
                  삭제
                </button>
              </div>
              <CommunityCommentBox
                comments={post.comments}
                canWrite={isLoggedIn}
                onAdd={(body) => addComment(post.id, body)}
              />
            </article>
            <aside className="community-aside">
              <CommunityPromoCard />
              <CommunityIndexList posts={mine} />
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
