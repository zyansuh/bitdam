import InterestChecks from '../components/InterestChecks'
import ProfilePhotoField from '../components/ProfilePhotoField'
import SettingsLayout from '../components/SettingsLayout'
import { useAccountProfile } from '../hooks/useAccountProfile'
import { useChangePassword } from '../hooks/useChangePassword'

export default function SettingsProfilePage() {
  const profile = useAccountProfile()
  const password = useChangePassword()

  return (
    <SettingsLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">프로필 설정</h1>
        <form
          className="account-form"
          onSubmit={(event) => {
            event.preventDefault()
            profile.saveProfile()
            if (password.current || password.next) password.changePassword()
          }}
        >
          <ProfilePhotoField preview={profile.preview} onPick={profile.onPickPhoto} onClear={profile.clearPhoto} />
          <label className="account-field">
            <span className="account-field__label">닉네임</span>
            <input value={profile.nickname} onChange={(event) => profile.setNickname(event.target.value)} />
          </label>
          <label className="account-field">
            <span className="account-field__label">이메일 주소</span>
            <div className="account-field__row">
              <input value={profile.email} onChange={(event) => profile.setEmail(event.target.value)} />
              {profile.verified ? <span className="account-verified">인증 완료</span> : null}
            </div>
          </label>
          <label className="account-field">
            <span className="account-field__label">휴대폰 번호</span>
            <input value={profile.phone} onChange={(event) => profile.setPhone(event.target.value)} />
          </label>
          <label className="account-field">
            <span className="account-field__label">생년월일</span>
            <input type="date" value={profile.birth} onChange={(event) => profile.setBirth(event.target.value)} />
          </label>
          <InterestChecks selected={profile.interests} onToggle={profile.toggleInterest} />
          <div className="settings-password">
            <h2 className="account-panel__title">비밀번호 변경</h2>
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
          </div>
          {profile.error || password.error ? (
            <p className="account-error">{profile.error || password.error}</p>
          ) : null}
          {profile.message || password.message ? (
            <p className="account-ok">{profile.message || password.message}</p>
          ) : null}
          <button type="submit" className="account-save">
            설정 저장하기
          </button>
        </form>
      </section>
    </SettingsLayout>
  )
}
