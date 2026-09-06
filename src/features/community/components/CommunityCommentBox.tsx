import { useState, type FormEvent } from 'react'
import type { CommunityComment } from '../types/communityPost'

interface CommunityCommentBoxProps {
  comments: CommunityComment[]
  canWrite: boolean
  onAdd: (body: string) => void
}

export default function CommunityCommentBox({ comments, canWrite, onAdd }: CommunityCommentBoxProps) {
  const [body, setBody] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!body.trim()) return
    onAdd(body)
    setBody('')
  }

  return (
    <section className="community-comments">
      <h2 className="community-index__title">댓글 {comments.length}</h2>
      {canWrite ? (
        <form className="community-comments__form" onSubmit={handleSubmit}>
          <input
            className="community-comments__input"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="댓글을 남겨 보세요"
          />
          <button type="submit" className="community-comments__btn" disabled={!body.trim()}>
            등록
          </button>
        </form>
      ) : null}
      <ul className="community-comments__list">
        {comments.map((comment) => (
          <li key={comment.id} className="community-comments__item">
            <p className="community-comments__name">{comment.authorName}</p>
            <p className="community-comments__body">{comment.body}</p>
            <p className="community-card__time">{new Date(comment.createdAt).toLocaleString('ko-KR')}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
