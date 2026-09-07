import { useParams } from 'react-router-dom'
import NoticeWritePage from './NoticeWritePage'

export default function NoticeEditPage() {
  const { id } = useParams()
  return <NoticeWritePage editId={id} />
}
