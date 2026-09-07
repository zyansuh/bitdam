import { Link } from 'react-router-dom'
import type { SellerShop } from '../types/lounge'

interface LoungeMatchedShopProps {
  shop: SellerShop
  onConfirm: () => void
}

export default function LoungeMatchedShop({ shop, onConfirm }: LoungeMatchedShopProps) {
  return (
    <article className="lounge-match">
      <img src={shop.image} alt="" className="lounge-match__photo" />
      <div>
        <p className="lounge-match__kicker">인증된 공방 · 양조장</p>
        <h3>{shop.name}</h3>
        <p>
          {shop.region} · {shop.address}
        </p>
        <p>
          대표 {shop.owner} · 사업자 {shop.bizNo}
        </p>
        <Link to={`/breweries/${shop.id}`} className="lounge-match__map">
          양조장 소개 보기
        </Link>
        <button type="button" className="lounge-btn" onClick={onConfirm}>
          이 공방으로 입점하기
        </button>
      </div>
    </article>
  )
}
