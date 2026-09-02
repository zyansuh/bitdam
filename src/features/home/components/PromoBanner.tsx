import { Link } from 'react-router-dom'
import { promoBanner } from '../data/promo'

export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-banner__frame">
        <img src={promoBanner.image} alt={promoBanner.alt} className="promo-banner__image" />
        <div className="promo-banner__overlay" />
        <div className="promo-banner__content">
          <h3 className="promo-banner__title">
            {promoBanner.titleLead}
            <span className="promo-banner__space"> </span>
            <br className="promo-banner__break" />
            {promoBanner.titleTail}
          </h3>
          <Link to="/classes?brewery=samhae" className="promo-banner__cta">
            {promoBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
