import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useAuth } from '../../../shared/hooks/useAuth'
import { useCart } from '../../../shared/hooks/useCart'
import { useCoupons } from '../../../shared/hooks/useCoupons'
import type { Coupon } from '../../../shared/types/coupon'
import { calcCartTotals } from '../../../shared/utils/cartTotals'
import { couponEffect } from '../../../shared/utils/couponEffect'
import { createOrderNo, writeLastOrder } from '../../../shared/utils/orderStorage'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import CartCoupon from '../components/CartCoupon'
import CartItemRow from '../components/CartItemRow'
import CartSummary from '../components/CartSummary'

export default function CartPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { items, setQuantity, removeItem, clearCart } = useCart()
  const { user } = useAuth()
  const { findAvailable, registerCode, markUsed } = useCoupons()
  const [couponInput, setCouponInput] = useState('')
  const [applied, setApplied] = useState<Coupon | null>(null)
  const [couponMessage, setCouponMessage] = useState('')
  const [payment, setPayment] = useState('신용카드')

  const itemsAmount = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items],
  )
  const effect = applied ? couponEffect(applied, itemsAmount) : { discount: 0, freeShipping: false }
  const totals = calcCartTotals(itemsAmount, effect.discount, effect.freeShipping)

  function applyOwned(coupon: Coupon) {
    setApplied(coupon)
    setCouponInput(coupon.code)
    setCouponMessage(`${coupon.title}이 적용되었습니다.`)
  }

  function applyCoupon() {
    const owned = findAvailable(couponInput)
    if (owned) {
      applyOwned(owned)
      return
    }
    const result = registerCode(couponInput)
    if (result.coupon) {
      applyOwned(result.coupon)
      return
    }
    setApplied(null)
    setCouponMessage(result.message)
  }

  useEffect(() => {
    const code = searchParams.get('coupon')
    if (!code) {
      return
    }
    const owned = findAvailable(code)
    if (owned) {
      applyOwned(owned)
    }
  }, [searchParams])

  function checkout() {
    writeLastOrder({
      orderNo: createOrderNo(),
      recipient: user?.nickname?.trim() || '빚담 회원',
      phone: '010-1234-5678',
      address: '서울시 성동구 연무장길 5, 빚담 라운지',
      payment,
      payAmount: totals.payAmount,
      couponTitle: applied?.title ?? null,
      productId: items[0].product.id,
      quantity: items[0].quantity,
    })
    if (applied) {
      markUsed(applied.id)
    }
    clearCart()
    navigate('/order/complete')
  }

  return (
    <PageLayout>
      <CatalogHeader />
      <main className="cart-page">
        <h1 className="cart-page__title">장바구니</h1>
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>담긴 술이 없습니다.</p>
            <Link to="/products" className="cart-empty__link">
              상품 보러 가기
            </Link>
            <Link to="/coupons" className="cart-empty__link">
              내 쿠폰함
            </Link>
          </div>
        ) : (
          <div className="cart-page__layout">
            <div className="cart-page__list">
              <div className="cart-page__head">
                <span>상품 정보</span>
                <span>수량 / 금액</span>
              </div>
              {items.map((item) => (
                <CartItemRow
                  key={item.product.id}
                  item={item}
                  onQuantity={(quantity) => setQuantity(item.product.id, quantity)}
                  onRemove={() => removeItem(item.product.id)}
                />
              ))}
              <CartCoupon
                code={couponInput}
                message={couponMessage}
                onCodeChange={setCouponInput}
                onApply={applyCoupon}
              />
            </div>
            <CartSummary
              totals={totals}
              payment={payment}
              onPayment={setPayment}
              canCheckout={items.length > 0}
              onCheckout={checkout}
            />
          </div>
        )}
      </main>
      <Footer />
    </PageLayout>
  )
}
