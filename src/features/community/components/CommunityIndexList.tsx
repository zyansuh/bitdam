import { Link } from 'react-router-dom'
import type { CommunityPost } from '../types/communityPost'

interface CommunityIndexListProps {
  posts: CommunityPost[]
}

export default function CommunityIndexList({ posts }: CommunityIndexListProps) {
  return (
    <nav aria-label="내 글 목록">
      <h2 className="community-index__title">글 목록</h2>
      {posts.length === 0 ? (
        <p className="community-index__empty">아직 글이 없습니다.</p>
      ) : (
        <ul className="community-index__list">
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`#post-${post.id}`} className="community-index__link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
