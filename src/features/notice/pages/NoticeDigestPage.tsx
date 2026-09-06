import { Link } from 'react-router-dom'
import { noticeCategoryLabel } from '../data/noticeTabs'
import NoticeLayout from '../components/NoticeLayout'
import { useNoticeDigest } from '../hooks/useNoticeDigest'

export default function NoticeDigestPage() {
  const { important, recent } = useNoticeDigest()

  return (
    <NoticeLayout>
      <section className="notice-digest">
        <h2 className="notice-digest__title">중요 공지 모아보기</h2>
        <ul className="notice-digest__list">
          {important.map((item) => (
            <li key={item.id}>
              <Link to={`/notices/${item.id}`}>
                <span className="notice-important">중요</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="notice-digest__title">최근 소식</h2>
        <ul className="notice-digest__list">
          {recent.map((item) => (
            <li key={item.id}>
              <Link to={`/notices/${item.id}`}>
                {noticeCategoryLabel(item.category)} · {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </NoticeLayout>
  )
}
