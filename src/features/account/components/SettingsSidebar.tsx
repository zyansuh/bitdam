import { settingsNav } from '../../../data/settingsNav'
import AccountNavList from './AccountNavList'

export default function SettingsSidebar() {
  return (
    <aside className="account-aside">
      <AccountNavList items={settingsNav} endPaths={['/account']} />
    </aside>
  )
}
