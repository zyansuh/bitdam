import { useAuth } from '../../../shared/hooks/useAuth'
import SettingsLayout from '../components/SettingsLayout'

export default function SettingsConnectionsPage() {
  const { user } = useAuth()
  const kakaoOn = user?.provider === 'kakao'

  return (
    <SettingsLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">연동된 서비스</h1>
        <ul className="account-list">
          <li className="account-list__item">
            <div>
              <p className="account-list__title">카카오</p>
              <p className="account-list__meta">{kakaoOn ? '현재 로그인에 사용 중입니다.' : '연결되지 않았습니다.'}</p>
            </div>
            <span className="mypage-status">{kakaoOn ? '연동됨' : '미연동'}</span>
          </li>
          <li className="account-list__item">
            <div>
              <p className="account-list__title">네이버</p>
              <p className="account-list__meta">준비 중입니다.</p>
            </div>
            <span className="mypage-status">미연동</span>
          </li>
          <li className="account-list__item">
            <div>
              <p className="account-list__title">Apple</p>
              <p className="account-list__meta">준비 중입니다.</p>
            </div>
            <span className="mypage-status">미연동</span>
          </li>
        </ul>
      </section>
    </SettingsLayout>
  )
}
