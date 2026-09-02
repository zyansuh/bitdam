import { footerLinks } from '../../../../data/footerLinks'
import FooterBottom from './FooterBottom'
import FooterBrand from './FooterBrand'
import FooterLinkColumn from './FooterLinkColumn'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <FooterBrand />
          {Object.entries(footerLinks).map(([title, links]) => (
            <FooterLinkColumn key={title} title={title} links={links} />
          ))}
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}
