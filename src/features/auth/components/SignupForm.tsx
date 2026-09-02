import { Link } from 'react-router-dom'
import { useSignupForm } from '../hooks/useSignupForm'

interface SignupFormProps {
  returnTo: string
}

export default function SignupForm({ returnTo }: SignupFormProps) {
  const form = useSignupForm(returnTo)

  return (
    <div className="login-form">
      <div className="login-form__intro">
        <div className="login-form__badge">
          <span className="login-form__badge-glyph">술</span>
        </div>
        <h2 className="login-form__title">빚담 회원가입</h2>
        <p className="login-form__desc">
          이메일로 가입하면 위시·주문 데모를
          <br />
          같은 브라우저에서 이어갈 수 있습니다.
        </p>
      </div>

      <form onSubmit={form.submit} className="login-form__fields">
        <div>
          <label htmlFor="signup-nickname" className="login-form__label">
            닉네임
          </label>
          <input
            id="signup-nickname"
            type="text"
            autoComplete="nickname"
            placeholder="빚담"
            value={form.nickname}
            onChange={(event) => form.setNickname(event.target.value)}
            className="login-form__input"
          />
        </div>
        <div>
          <label htmlFor="signup-email" className="login-form__label">
            이메일 주소
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="bitdam@example.com"
            value={form.email}
            onChange={(event) => form.setEmail(event.target.value)}
            className="login-form__input"
          />
        </div>
        <div>
          <label htmlFor="signup-password" className="login-form__label">
            비밀번호
          </label>
          <input
            id="signup-password"
            type="password"
            autoComplete="new-password"
            placeholder="8자 이상"
            value={form.password}
            onChange={(event) => form.setPassword(event.target.value)}
            className="login-form__input"
          />
        </div>
        <div>
          <label htmlFor="signup-confirm" className="login-form__label">
            비밀번호 확인
          </label>
          <input
            id="signup-confirm"
            type="password"
            autoComplete="new-password"
            placeholder="비밀번호를 다시 입력"
            value={form.confirm}
            onChange={(event) => form.setConfirm(event.target.value)}
            className="login-form__input"
          />
        </div>
        <label className="login-form__agree">
          <input
            type="checkbox"
            checked={form.agree}
            onChange={(event) => form.setAgree(event.target.checked)}
            className="login-form__checkbox"
          />
          <span className="login-form__agree-text">
            만 19세 이상이며, 이용약관과 개인정보 처리방침에 동의합니다.
          </span>
        </label>
        {form.error ? <p className="login-form__error">{form.error}</p> : null}
        <button type="submit" className="login-form__submit">
          이메일로 가입하기
        </button>
      </form>

      <div className="login-form__help">
        <span>이미 계정이 있나요?</span>
        <Link to="/login" className="login-form__help-link">
          로그인
        </Link>
      </div>
      <p className="login-form__home">
        <Link to={returnTo} className="login-form__home-link">
          {returnTo === '/' ? '← 홈으로 돌아가기' : '← 이전 페이지로 돌아가기'}
        </Link>
      </p>
    </div>
  )
}
