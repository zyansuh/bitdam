import { NavLink } from 'react-router-dom'
import { staffNav } from '../data/staffNav'

export default function StaffSidebar() {
  return (
    <aside className="staff-aside">
      <p className="staff-aside__kicker">운영</p>
      <nav className="staff-nav">
        {staffNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `staff-nav__item${isActive ? ' staff-nav__item--on' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
