import type { CommunityPost } from '../types/communityPost'
import CommunityPostCard from './CommunityPostCard'

interface CommunityPostListProps {
  posts: CommunityPost[]
  onDelete: (id: string) => void
}

export default function CommunityPostList({ posts, onDelete }: CommunityPostListProps) {
  if (posts.length === 0) {
    return <p className="community-empty">아직 글이 없습니다. 첫 기록을 남겨 보세요.</p>
  }

  return (
    <div className="community-feed">
      {posts.map((post) => (
        <CommunityPostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  )
}
