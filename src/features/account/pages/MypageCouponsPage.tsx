import MypageLayout from '../components/MypageLayout'
import { mypageCoupons } from '../data/mypageMock'

export default function MypageCouponsPage() {
  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">쿠폰 및 혜택</h1>
        <ul className="account-list">
          {mypageCoupons.map((coupon) => (
            <li key={coupon.id} className="account-list__item">
              <div>
                <p className="account-list__title">{coupon.name}</p>
                <p className="account-list__meta">코드 {coupon.id} · {coupon.expire}까지</p>
              </div>
              <span className="mypage-status">{coupon.leftover}</span>
            </li>
          ))}
        </ul>
      </section>
    </MypageLayout>
  )
}
