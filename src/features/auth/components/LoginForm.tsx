import { Link } from 'react-router-dom'
import { buildSignupPath } from '../../../shared/utils/signupPath'
import { useEmailLogin } from '../hooks/useEmailLogin'
import LoginSocialButtons from './LoginSocialButtons'
import LoginSocialDivider from './LoginSocialDivider'

interface LoginFormProps {
  returnTo?: string
}

export default function LoginForm({ returnTo = '/' }: LoginFormProps) {
  const backLabel = returnTo === '/' ? '← 홈으로 돌아가기' : '← 이전 페이지로 돌아가기'
  const form = useEmailLogin(returnTo)
  const signupTo = buildSignupPath(returnTo)

  return (
    <div className="login-form">
      <div className="login-form__intro">
        <div className="login-form__badge">
          <span className="login-form__badge-glyph">술</span>
        </div>
        <h2 className="login-form__title">반갑습니다, 빚담입니다</h2>
        <p className="login-form__desc">
          본인인증 후 술추천 서비스를
          <br />
          한눈에 가이드받을 수 있습니다.
        </p>
      </div>

      <form onSubmit={form.submit} className="login-form__fields">
        <div>
          <label htmlFor="email" className="login-form__label">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="bitdam@example.com"
            value={form.email}
            onChange={(event) => form.setEmail(event.target.value)}
            className="login-form__input"
          />
        </div>
        <div>
          <label htmlFor="password" className="login-form__label">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••••••"
            value={form.password}
            onChange={(event) => form.setPassword(event.target.value)}
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
            로그인 시 이메일 저장, 약관 이용에 동의합니다.
          </span>
        </label>
        {form.error ? <p className="login-form__error">{form.error}</p> : null}
        <button type="submit" className="login-form__submit">
          술추천 맞춤으로 로그인하기
        </button>
      </form>

      <LoginSocialDivider />
      <LoginSocialButtons />

      <Link to={signupTo} className="login-form__signup">
        회원가입
      </Link>

      <div className="login-form__help">
        <button type="button" className="login-form__help-link">
          비밀번호 찾기
        </button>
      </div>
      <p className="login-form__home">
        <Link to={returnTo} className="login-form__home-link">
          {backLabel}
        </Link>
      </p>
    </div>
  )
}
