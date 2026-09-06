import { NavLink } from 'react-router-dom'
import type { AccountNavItem } from '../types/accountNav'

interface AccountNavListProps {
  items: AccountNavItem[]
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
