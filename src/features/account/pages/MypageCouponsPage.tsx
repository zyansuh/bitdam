import { isCouponExpired } from '../../../shared/utils/couponEffect'
import { useCouponWallet } from '../../../shared/hooks/useCouponWallet'
import MypageLayout from '../components/MypageLayout'

export default function MypageCouponsPage() {
  const { coupons } = useCouponWallet()

  return (
    <MypageLayout>
      <section className="account-panel">
        <h1 className="account-panel__title">쿠폰 및 혜택</h1>
        <ul className="account-list">
          {coupons.length === 0 ? (
            <li className="account-list__item">로그인하면 첫 구매 쿠폰이 지급됩니다.</li>
          ) : (
            coupons.map((coupon) => {
              const used = Boolean(coupon.usedAt)
              const expired = isCouponExpired(coupon)
              const leftover = used ? '사용 완료' : expired ? '기간 만료' : '사용 전'
              return (
                <li key={coupon.id} className="account-list__item">
                  <div>
                    <p className="account-list__title">{coupon.name}</p>
                    <p className="account-list__meta">
                      코드 {coupon.code} · {coupon.expire}까지
                      {used && coupon.orderId ? ` · 주문 ${coupon.orderId}` : ''}
                    </p>
                  </div>
                  <span className="mypage-status">{leftover}</span>
                </li>
              )
            })
          )}
        </ul>
      </section>
    </MypageLayout>
  )
}
