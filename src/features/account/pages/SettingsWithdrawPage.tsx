import SettingsLayout from '../components/SettingsLayout'
import { useWithdrawAccount } from '../hooks/useWithdrawAccount'

export default function SettingsWithdrawPage() {
  const { checked, setChecked, withdraw, error } = useWithdrawAccount()

  return (
    <SettingsLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">탈퇴하기</h1>
        <p className="account-panel__sub">
          탈퇴하면 마이페이지의 문의·배송지·결제수단 기록이 이 브라우저에서 지워지고 바로 로그아웃됩니다.
        </p>
        <label className="settings-interests__item">
          <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} />
          안내를 확인했으며 탈퇴에 동의합니다.
        </label>
        {error ? <p className="account-error">{error}</p> : null}
        <button type="button" className="account-save account-save--danger" onClick={withdraw}>
          탈퇴하기
        </button>
      </section>
    </SettingsLayout>
  )
}
