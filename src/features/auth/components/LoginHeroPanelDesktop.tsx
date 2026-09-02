import { LOGIN_HERO_IMAGE } from '../data/login'
import LoginHeroContent from './LoginHeroContent'

export default function LoginHeroPanelDesktop() {
  return (
    <div className="login-hero-desktop">
      <img src={LOGIN_HERO_IMAGE} alt="전통 양조장 장독대" className="login-hero-desktop__image" />
      <div className="login-hero-desktop__shade-x" />
      <div className="login-hero-desktop__shade-y" />
      <div className="login-hero-desktop__content">
        <div className="login-hero-desktop__copy">
          <LoginHeroContent />
        </div>
        <div className="login-hero-desktop__brand">
          <div className="login-mini-mark login-mini-mark--desktop">
            <span className="login-mini-mark__glyph login-mini-mark__glyph--desktop">술</span>
          </div>
          <span className="login-brand-name login-brand-name--desktop">빚담</span>
        </div>
      </div>
    </div>
  )
}
