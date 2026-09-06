import { Link } from 'react-router-dom'
import type { SiteMenuLinkItem } from '../../types/siteMenu'

interface SiteMenuLinkListProps {
  items: SiteMenuLinkItem[]
  onClose: () => void
}

export default function SiteMenuLinkList({ items, onClose }: SiteMenuLinkListProps) {
  return (
    <ul className="site-menu__list">
      {items.map((item) => (
        <li key={`${item.to}-${item.label}`}>
          <Link to={item.to} className="site-menu__link" onClick={onClose}>
            <span>{item.label}</span>
            {item.note ? <span className="site-menu__note">{item.note}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}
