import { Link } from 'react-router-dom'
import type { FooterNavLink } from '../../../types/footer'

interface FooterLinkColumnProps {
  title: string
  links: FooterNavLink[]
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h4 className="footer__heading">{title}</h4>
      <ul className="footer__list">
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link to={link.to} className="footer__link">
                {link.label}
              </Link>
            ) : (
              <span className="footer__link">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
