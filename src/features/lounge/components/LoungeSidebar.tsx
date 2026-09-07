import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canWriteWorkReport, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import { loungeNav } from '../data/loungeNav'

export default function LoungeSidebar() {
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const items = loungeNav.filter(
    (item) => item.to !== '/mypage/staff/work-reports' || canWriteWorkReport(role),
  )

  return (
    <aside className="lounge-aside">
      <p className="lounge-aside__kicker">셀러 라운지</p>
      <nav className="lounge-nav">
        {items.map((item) => (
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
