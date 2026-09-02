import { LOGIN_HERO_IMAGE } from '../data/login'
import LoginHeroContent from './LoginHeroContent'

export default function LoginHeroPanelMobile() {
  return (
    <div className="login-hero-mobile">
      <img src={LOGIN_HERO_IMAGE} alt="전통 양조장 장독대" className="login-hero-mobile__image" />
      <div className="login-hero-mobile__shade" />
      <div className="login-hero-mobile__content">
        <LoginHeroContent compact />
        <div className="login-hero-mobile__brand">
          <div className="login-mini-mark login-mini-mark--mobile">
            <span className="login-mini-mark__glyph login-mini-mark__glyph--mobile">술</span>
          </div>
          <span className="login-brand-name login-brand-name--mobile">빚담</span>
        </div>
      </div>
    </div>
  )
}
