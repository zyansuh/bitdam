import SettingsLayout from '../components/SettingsLayout'
import { useChangePassword } from '../hooks/useChangePassword'

export default function SettingsSecurityPage() {
  const password = useChangePassword()

  return (
    <SettingsLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">보안 & 비밀번호</h1>
        <p className="account-panel__sub">
          {password.isEmail
            ? '이메일 계정의 로그인 비밀번호를 바꿀 수 있습니다.'
            : '카카오 계정은 카카오에서 비밀번호를 관리합니다.'}
        </p>
        <form
          className="account-form settings-password"
          onSubmit={(event) => {
            event.preventDefault()
            password.changePassword()
          }}
        >
          <label className="account-field">
            <span className="account-field__label">현재 비밀번호</span>
            <input
              type="password"
              value={password.current}
              onChange={(event) => password.setCurrent(event.target.value)}
            />
          </label>
          <label className="account-field">
            <span className="account-field__label">새 비밀번호</span>
            <input type="password" value={password.next} onChange={(event) => password.setNext(event.target.value)} />
          </label>
          {password.error ? <p className="account-error">{password.error}</p> : null}
          {password.message ? <p className="account-ok">{password.message}</p> : null}
          <button type="submit" className="account-save">
            비밀번호 변경
          </button>
        </form>
      </section>
    </SettingsLayout>
  )
}
