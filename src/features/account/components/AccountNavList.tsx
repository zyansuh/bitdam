import { NavLink } from 'react-router-dom'
import type { NavLinkItem } from '../../../shared/types/navigation'

interface AccountNavListProps {
  items: NavLinkItem[]
  endPaths?: string[]
}

export default function AccountNavList({ items, endPaths = [] }: AccountNavListProps) {
  return (
    <nav className="account-nav">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={endPaths.includes(item.to)}
          className={({ isActive }) => `account-nav__item${isActive ? ' account-nav__item--on' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
