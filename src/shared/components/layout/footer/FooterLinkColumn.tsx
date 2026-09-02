interface FooterLinkColumnProps {
  title: string
  links: string[]
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h4 className="footer__heading">{title}</h4>
      <ul className="footer__list">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="footer__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
