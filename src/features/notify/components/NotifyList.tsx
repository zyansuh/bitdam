import { Link } from 'react-router-dom'
import type { SiteNotice } from '../types/siteNotice'

interface NotifyListProps {
  items: SiteNotice[]
  read: string[]
  onOpen: (id: string) => void
}

const kindLabel: Record<SiteNotice['kind'], string> = {
  shipping: '배송',
  event: '이벤트',
  community: '커뮤니티',
  system: '시스템',
}

export default function NotifyList({ items, read, onOpen }: NotifyListProps) {
  if (items.length === 0) {
    return <p className="notify-empty">이 분류의 알림이 없습니다.</p>
  }

  return (
    <ul className="notify-list">
      {items.map((item) => (
        <li key={item.id} className={`notify-card${read.includes(item.id) ? ' notify-card--read' : ''}`}>
          <p className="notify-card__kind">{kindLabel[item.kind]}</p>
          <h2 className="notify-card__title">{item.title}</h2>
          <p className="notify-card__body">{item.body}</p>
          <div className="notify-card__foot">
            <time className="notify-card__time">{item.time}</time>
            <Link to={item.actionTo} className="notify-card__action" onClick={() => onOpen(item.id)}>
              {item.actionLabel} {'>'}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
