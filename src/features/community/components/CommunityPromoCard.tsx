import { Link } from 'react-router-dom'
import { promoBanner } from '../../home/data/promo'

export default function CommunityPromoCard() {
  return (
    <Link to="/classes?brewery=samhae" className="community-promo">
      <p className="community-promo__kicker">팝업 스토어</p>
      <p className="community-promo__title">
        {promoBanner.titleLead}
        <br />
        {promoBanner.titleTail}
      </p>
      <span className="community-promo__cta">{promoBanner.cta}</span>
    </Link>
  )
}
