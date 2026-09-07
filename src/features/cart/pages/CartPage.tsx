import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useAuth } from '../../../shared/hooks/useAuth'
import { useCart } from '../../../shared/hooks/useCart'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import CartItemRow from '../components/CartItemRow'
import CartSummary from '../components/CartSummary'
import { useCouponWallet } from '../../../shared/hooks/useCouponWallet'
import CartCoupon from '../components/CartCoupon'
import { useCartCheckout } from '../hooks/useCartCheckout'

export default function CartPage() {
  const { items, setQuantity, removeItem, addItem } = useCart()
  const { isLoggedIn } = useAuth()
  const { unused } = useCouponWallet()
  const [couponId, setCouponId] = useState('')
  const selected = unused.find((coupon) => coupon.id === couponId)
  const { totals, checkout, couponReason, stockReason } = useCartCheckout(selected)
  const [payment, setPayment] = useState('신용카드')
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const queued = useRef(false)

  useEffect(() => {
    if (queued.current) return
    const productId = Number(params.get('product'))
    const qty = Number(params.get('qty') || '1')
    if (!Number.isInteger(productId) || productId < 1) return
    queued.current = true
    addItem(productId, Number.isInteger(qty) && qty > 0 ? qty : 1)
    navigate('/cart', { replace: true })
  }, [addItem, navigate, params])

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
            </div>
            <CartSummary
              totals={totals}
              payment={payment}
              onPayment={setPayment}
              canCheckout={items.length > 0 && isLoggedIn && !couponReason && !stockReason}
              couponSlot={
                <CartCoupon
                  coupons={unused}
                  selectedId={couponId}
                  onSelect={setCouponId}
                  reason={couponReason ?? stockReason}
                />
              }
              onCheckout={() => {
                if (!isLoggedIn) {
                  navigate('/login')
                  return
                }
                const order = checkout(payment)
                if (order) navigate(`/order/complete/${order.id}`)
              }}
            />
          </div>
        )}
        {!isLoggedIn && items.length > 0 ? (
          <p className="cart-empty">
            결제하려면 <Link to="/login">로그인</Link>이 필요합니다.
          </p>
        ) : null}
      </main>
      <Footer />
    </PageLayout>
  )
}
