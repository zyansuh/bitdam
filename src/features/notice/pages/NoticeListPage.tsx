import NoticeLayout from '../components/NoticeLayout'
import NoticePager from '../components/NoticePager'
import NoticeTable from '../components/NoticeTable'
import NoticeTabs from '../components/NoticeTabs'
import { useNoticeBoard } from '../hooks/useNoticeBoard'

export default function NoticeListPage() {
  const board = useNoticeBoard()

  return (
    <NoticeLayout query={board.query} onQuery={board.search}>
      {!board.ready ? <p className="notice-error">공지를 불러오는 중입니다.</p> : null}
      <NoticeTabs active={board.tab} onSelect={board.selectTab} />
      <NoticeTable rows={board.rows} />
      <NoticePager page={board.page} pages={board.pages} onPage={board.setPage} />
    </NoticeLayout>
  )
}
