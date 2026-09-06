import { Heart, MessageCircle } from 'lucide-react'
import type { CommunityPost } from '../types/communityPost'

interface CommunityPostCardProps {
  post: CommunityPost
  onDelete: (id: string) => void
  onLike: (id: string) => void
}

export default function CommunityPostCard({ post, onDelete, onLike }: CommunityPostCardProps) {
  const time = new Date(post.createdAt).toLocaleString('ko-KR')

  return (
    <article id={`post-${post.id}`} className="community-card">
      <div className="community-card__head">
        <div className="community-card__who">
          {post.authorImage ? (
            <img src={post.authorImage} alt="" className="community-card__avatar" referrerPolicy="no-referrer" />
          ) : (
            <span className="community-card__avatar community-card__avatar--empty" />
          )}
          <div>
            <h2 className="community-card__title">{post.title}</h2>
            <p className="community-card__time">
              {post.authorName} · {time}
            </p>
          </div>
        </div>
        <button type="button" className="community-card__delete" onClick={() => onDelete(post.id)}>
          삭제
        </button>
      </div>
      <p className="community-card__body">{post.body}</p>
      {post.image ? <img src={post.image} alt="" className="community-card__photo" /> : null}
      <div className="community-card__actions">
        <button type="button" className="community-card__react" onClick={() => onLike(post.id)}>
          <Heart size={16} strokeWidth={1.6} />
          {post.likes}
        </button>
        <span className="community-card__react">
          <MessageCircle size={16} strokeWidth={1.6} />
          0
        </span>
      </div>
    </article>
  )
}
