import FacebookIcon from '../../icons/FacebookIcon'
import InstagramIcon from '../../icons/InstagramIcon'

export default function FooterBottom() {
  return (
    <div className="footer__bottom">
      <p className="footer__copyright">© 2026 빚담 Bitdam. All rights reserved.</p>
      <div className="footer__sns">
        <a href="#" aria-label="Instagram" className="footer__sns-link">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="Facebook" className="footer__sns-link">
          <FacebookIcon />
        </a>
      </div>
    </div>
  )
}
