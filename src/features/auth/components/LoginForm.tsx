import { Link } from 'react-router-dom'
import LoginSocialButtons from './LoginSocialButtons'
import LoginSocialDivider from './LoginSocialDivider'

interface LoginFormProps {
  returnTo?: string
}

export default function LoginForm({ returnTo = '/' }: LoginFormProps) {
  const backLabel = returnTo === '/' ? '← 홈으로 돌아가기' : '← 이전 페이지로 돌아가기'
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

      <form onSubmit={(event) => event.preventDefault()} className="login-form__fields">
        <div>
          <label htmlFor="email" className="login-form__label">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            placeholder="bitdam@example.com"
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
            placeholder="••••••••••••"
            className="login-form__input"
          />
        </div>
        <label className="login-form__agree">
          <input type="checkbox" className="login-form__checkbox" />
          <span className="login-form__agree-text">
            로그인 시 이메일 저장, 약관 이용에 동의합니다.
          </span>
        </label>
        <button type="submit" className="login-form__submit">
          술추천 맞춤으로 로그인하기
        </button>
      </form>

      <LoginSocialDivider />
      <LoginSocialButtons />

      <div className="login-form__help">
        <a href="#" className="login-form__help-link">
          회원 가입
        </a>
        <span className="login-form__help-sep">|</span>
        <a href="#" className="login-form__help-link">
          비밀번호 찾기
        </a>
      </div>
      <p className="login-form__home">
        <Link to={returnTo} className="login-form__home-link">
          {backLabel}
        </Link>
      </p>
    </div>
  )
}
