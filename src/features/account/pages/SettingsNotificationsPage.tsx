import SettingsLayout from '../components/SettingsLayout'
import { useAccountNotify } from '../hooks/useAccountNotify'

export default function SettingsNotificationsPage() {
  const { prefs, toggle, save, saved } = useAccountNotify()

  return (
    <SettingsLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">알림 설정</h1>
        <ul className="account-list">
          <li className="account-list__item">
            <p className="account-list__title">주문·배송 알림</p>
            <label className="settings-switch">
              <input type="checkbox" checked={prefs.order} onChange={() => toggle('order')} />
              받기
            </label>
          </li>
          <li className="account-list__item">
            <p className="account-list__title">마케팅·혜택 알림</p>
            <label className="settings-switch">
              <input type="checkbox" checked={prefs.marketing} onChange={() => toggle('marketing')} />
              받기
            </label>
          </li>
          <li className="account-list__item">
            <p className="account-list__title">양조장 투어 알림</p>
            <label className="settings-switch">
              <input type="checkbox" checked={prefs.tour} onChange={() => toggle('tour')} />
              받기
            </label>
          </li>
        </ul>
        <button type="button" className="account-save" onClick={save}>
          알림 설정 저장
        </button>
        {saved ? <p className="account-ok">저장했습니다. 알림 센터(`/notifications`)에 바로 반영됩니다.</p> : null}
      </section>
    </SettingsLayout>
  )
}
