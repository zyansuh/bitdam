import type { CommunityPost } from '../types/communityPost'

interface CommunityPostCardProps {
  post: CommunityPost
  onDelete: (id: string) => void
}

export default function CommunityPostCard({ post, onDelete }: CommunityPostCardProps) {
  const time = new Date(post.createdAt).toLocaleString('ko-KR')

  return (
    <article id={`post-${post.id}`} className="community-card">
      <div className="community-card__head">
        <div>
          <h2 className="community-card__title">{post.title}</h2>
          <p className="community-card__time">{time}</p>
        </div>
        <button type="button" className="community-card__delete" onClick={() => onDelete(post.id)}>
          삭제
        </button>
      </div>
      <p className="community-card__body">{post.body}</p>
    </article>
  )
}
