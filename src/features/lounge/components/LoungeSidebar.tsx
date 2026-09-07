import { NavLink } from 'react-router-dom'
import { loungeNav } from '../data/loungeNav'

export default function LoungeSidebar() {
  return (
    <aside className="lounge-aside">
      <p className="lounge-aside__kicker">셀러 라운지</p>
      <nav className="lounge-nav">
        {loungeNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/mypage/lounge'}
            className={({ isActive }) => `lounge-nav__item${isActive ? ' lounge-nav__item--on' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
