import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { noticeCategoryLabel } from '../data/noticeTabs'
import NoticeLayout from '../components/NoticeLayout'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canModerateContent, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import { useNoticeDetail } from '../hooks/useNoticeDetail'
import { deleteNotice } from '../utils/noticeStorage'

export default function NoticeDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const post = useNoticeDetail(id)
  const canModerate = canModerateContent(resolveWorkspaceRole(user))

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
        <div className="notice-detail__actions">
          <Link to="/notices" className="notice-tool">
            목록
          </Link>
          {canModerate ? (
            <>
              <Link to={`/notices/${post.id}/edit`} className="notice-tool notice-tool--gold">
                수정
              </Link>
              <button
                type="button"
                className="notice-tool"
                onClick={() => {
                  deleteNotice(post.id)
                  navigate('/notices')
                }}
              >
                삭제
              </button>
            </>
          ) : null}
        </div>
      </article>
    </NoticeLayout>
  )
}
