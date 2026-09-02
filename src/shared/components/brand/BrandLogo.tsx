import { Link } from 'react-router-dom'

interface BrandLogoProps {
  size?: 'sm' | 'md'
  nameTone?: 'default' | 'navy' | 'light'
}

export default function BrandLogo({ size = 'sm', nameTone = 'default' }: BrandLogoProps) {
  const nameClass =
    nameTone === 'default' ? '' : `brand-logo__name--${nameTone}`

  return (
    <Link to="/" className="brand-logo">
      <div className={`brand-logo__mark brand-logo__mark--${size}`}>
        <span className={`brand-logo__glyph brand-logo__glyph--${size}`}>빚</span>
      </div>
      <span className={`brand-logo__name brand-logo__name--${size} ${nameClass}`.trim()}>
        빚담
      </span>
    </Link>
  )
}
