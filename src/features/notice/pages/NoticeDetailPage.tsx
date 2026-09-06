import { Link, Navigate, useParams } from 'react-router-dom'
import { noticeCategoryLabel } from '../data/noticeTabs'
import NoticeLayout from '../components/NoticeLayout'
import { useNoticeDetail } from '../hooks/useNoticeDetail'

export default function NoticeDetailPage() {
  const { id } = useParams()
  const post = useNoticeDetail(id)

  if (!post) {
    return <Navigate to="/notices" replace />
  }

  return (
    <NoticeLayout>
      <article className="notice-detail">
        <p className="notice-detail__meta">
          {post.important ? <span className="notice-important">중요</span> : null}
          {noticeCategoryLabel(post.category)} · {post.date} · 조회 {post.views.toLocaleString()}
        </p>
        <h2 className="notice-detail__title">{post.title}</h2>
        <p className="notice-detail__body">{post.body}</p>
        <Link to="/notices" className="notice-tool">
          목록
        </Link>
      </article>
    </NoticeLayout>
  )
}
