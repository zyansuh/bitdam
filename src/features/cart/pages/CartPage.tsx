import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../shared/components/layout/footer/Footer'
import PageLayout from '../../../shared/components/layout/PageLayout'
import { useCart } from '../../../shared/hooks/useCart'
import { calcCartTotals } from '../../../shared/utils/cartTotals'
import CatalogHeader from '../../catalog/components/CatalogHeader'
import CartItemRow from '../components/CartItemRow'
import CartSummary from '../components/CartSummary'

export default function CartPage() {
  const { items, setQuantity, removeItem, clearCart } = useCart()
  const [payment, setPayment] = useState('신용카드')

  const itemsAmount = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items],
  )
  const effect = { discount: 0, freeShipping: false }
  const totals = calcCartTotals(itemsAmount, effect.discount, effect.freeShipping)

  function checkout() {
    clearCart()
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
