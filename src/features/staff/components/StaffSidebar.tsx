import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../shared/hooks/useAuth'
import { canOpenAdminScope, canOpenCmsStudio, resolveWorkspaceRole } from '../../../shared/utils/workspaceRole'
import { staffNav } from '../data/staffNav'

export default function StaffSidebar() {
  const { user } = useAuth()
  const role = resolveWorkspaceRole(user)
  const items = staffNav.filter((item) => {
    if (item.to === '/mypage/admin/people' || item.to === '/mypage/admin/performance') {
      return canOpenAdminScope(role)
    }
    if (item.to === '/mypage/admin/content') {
      return canOpenCmsStudio(role)
    }
    return true
  })

  return (
    <aside className="staff-aside">
      <p className="staff-aside__kicker">운영</p>
      <nav className="staff-nav">
        {items.map((item) => (
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
