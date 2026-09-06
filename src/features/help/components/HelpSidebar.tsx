import { NavLink } from 'react-router-dom'
import { helpCategories } from '../data/helpCategories'

export default function HelpSidebar() {
  return (
    <nav className="help-nav" aria-label="고객센터 분류">
      {helpCategories.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className={({ isActive }) => `help-nav__item${isActive ? ' help-nav__item--on' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
