import { useState } from 'react'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useCoupons } from '../../../shared/hooks/useCoupons'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import CouponCard from '../components/CouponCard'
import CouponRegisterBar from '../components/CouponRegisterBar'
import CouponStatusTabs from '../components/CouponStatusTabs'
import { useCouponTab } from '../hooks/useCouponTab'

export default function CouponBoxPage() {
  const { coupons, availableCount, usedCount, expiredCount, registerCode } = useCoupons()
  const { tab, setTab } = useCouponTab()
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  const visible = coupons.filter((item) => item.status === tab)

  return (
    <PageLayout>
      <CatalogHeader variant="navy" />
      <main className="coupon-page">
        <div className="coupon-page__head">
          <div>
            <h1 className="coupon-page__title">내 쿠폰함</h1>
            <p className="coupon-page__lead">
              현재 사용 가능한 쿠폰은 총 {availableCount}장 입니다.
            </p>
          </div>
          <CouponRegisterBar
            code={code}
            message={message}
            onCodeChange={setCode}
            onRegister={() => {
              const result = registerCode(code)
              setMessage(result.message)
              setCode('')
            }}
          />
        </div>
        <CouponStatusTabs
          tab={tab}
          availableCount={availableCount}
          usedCount={usedCount}
          expiredCount={expiredCount}
          onChange={setTab}
        />
        <div className="coupon-page__list">
          {visible.length === 0 ? (
            <p className="coupon-page__empty">해당 쿠폰이 없습니다.</p>
          ) : (
            visible.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)
          )}
        </div>
      </main>
      <Footer />
    </PageLayout>
  )
}
