import { Link } from 'react-router-dom'
import { Heart, MessageCircle } from 'lucide-react'
import { communityCategoryLabel } from '../data/communityCategories'
import type { CommunityPost } from '../types/communityPost'

interface CommunityListCardProps {
  post: CommunityPost
}

export default function CommunityListCard({ post }: CommunityListCardProps) {
  const excerpt = post.body.slice(0, 90)
  const time = new Date(post.createdAt).toLocaleDateString('ko-KR')

  return (
    <article className="community-list-card">
      {post.image ? (
        <Link to={`/community/${post.id}`} className="community-list-card__media">
          <img src={post.image} alt="" />
        </Link>
      ) : null}
      <div className="community-list-card__body">
        <p className="community-list-card__badge">{communityCategoryLabel(post.category)}</p>
        <Link to={`/community/${post.id}`} className="community-list-card__title">
          {post.title}
        </Link>
        <p className="community-list-card__excerpt">{excerpt}</p>
        <p className="community-list-card__meta">
          {post.authorName} · {time}
        </p>
        <p className="community-list-card__stats">
          <Heart size={14} strokeWidth={1.6} />
          {post.likes}
          <MessageCircle size={14} strokeWidth={1.6} />
          {post.comments.length}
        </p>
      </div>
    </article>
  )
}
